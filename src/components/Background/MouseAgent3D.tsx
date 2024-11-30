import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Box } from '@mui/material';

interface Task {
  type: 'analyze' | 'collect' | 'process';
  position: THREE.Vector3;
  object: THREE.Object3D;
  completed: boolean;
  startTime: number;
}

const MouseAgent3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<THREE.Group>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const tasksRef = useRef<Task[]>([]);
  const targetPositionRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const currentTaskRef = useRef<Task | null>(null);

  const createDataCube = () => {
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.8,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createAnalysisSphere = () => {
    const geometry = new THREE.SphereGeometry(0.15, 16, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x13A7B0,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createProcessingRing = () => {
    const geometry = new THREE.TorusGeometry(0.2, 0.02, 16, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff3366,
      transparent: true,
      opacity: 0.7,
    });
    return new THREE.Mesh(geometry, material);
  };

  const createMouse = () => {
    const mouse = new THREE.Group();

    // Verbesserte Körperform
    const bodyGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x13A7B0,
      emissive: 0x072534,
      shininess: 50,
      transparent: true,
      opacity: 0.9,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    mouse.add(body);

    // Detailliertere Ohren
    const earGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const earMaterial = new THREE.MeshPhongMaterial({
      color: 0x13A7B0,
      emissive: 0x072534,
      shininess: 50,
      transparent: true,
      opacity: 0.9,
    });

    const leftEar = new THREE.Mesh(earGeometry, earMaterial);
    leftEar.position.set(-0.3, 0.3, 0);
    leftEar.scale.set(1, 1.2, 0.7);
    mouse.add(leftEar);

    const rightEar = new THREE.Mesh(earGeometry, earMaterial);
    rightEar.position.set(0.3, 0.3, 0);
    rightEar.scale.set(1, 1.2, 0.7);
    mouse.add(rightEar);

    // Leuchtende Augen
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x13A7B0,
      shininess: 100,
    });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 0.1, 0.35);
    mouse.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 0.1, 0.35);
    mouse.add(rightEye);

    // Verbesserte Nase
    const noseGeometry = new THREE.SphereGeometry(0.08, 32, 32);
    const noseMaterial = new THREE.MeshPhongMaterial({
      color: 0x000000,
      shininess: 100,
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 0, 0.45);
    mouse.add(nose);

    // Dynamischer Schwanz
    const tailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, -0.5),
      new THREE.Vector3(-0.2, 0.2, -0.7),
      new THREE.Vector3(-0.1, 0.4, -0.9),
    ]);
    const tailGeometry = new THREE.TubeGeometry(tailCurve, 20, 0.05, 8, false);
    const tailMaterial = new THREE.MeshPhongMaterial({
      color: 0x13A7B0,
      emissive: 0x072534,
      shininess: 50,
      transparent: true,
      opacity: 0.9,
    });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    mouse.add(tail);

    return mouse;
  };

  const createTask = () => {
    const types: ('analyze' | 'collect' | 'process')[] = ['analyze', 'collect', 'process'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let object;
    switch (type) {
      case 'analyze':
        object = createAnalysisSphere();
        break;
      case 'collect':
        object = createDataCube();
        break;
      case 'process':
        object = createProcessingRing();
        break;
    }

    const position = new THREE.Vector3(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4
    );

    object.position.copy(position);
    sceneRef.current?.add(object);

    return {
      type,
      position,
      object,
      completed: false,
      startTime: Date.now(),
    };
  };

  const updateMouseMovement = () => {
    if (!mouseRef.current || !currentTaskRef.current) return;

    const mouse = mouseRef.current;
    const target = targetPositionRef.current;
    const task = currentTaskRef.current;

    // Berechne Richtung zum Ziel
    const direction = new THREE.Vector3().subVectors(target, mouse.position);
    const distance = direction.length();

    if (distance > 0.1) {
      // Bewege die Maus zum Ziel
      direction.normalize();
      mouse.position.add(direction.multiplyScalar(0.05));

      // Drehe die Maus in Bewegungsrichtung
      const targetRotation = Math.atan2(direction.x, direction.z);
      mouse.rotation.y += (targetRotation - mouse.rotation.y) * 0.1;
    } else if (!task.completed) {
      // Führe Aufgabe aus
      switch (task.type) {
        case 'analyze':
          task.object.scale.multiplyScalar(0.95);
          if (task.object.scale.x < 0.1) task.completed = true;
          break;
        case 'collect':
          task.object.position.lerp(mouse.position, 0.1);
          if (task.object.position.distanceTo(mouse.position) < 0.1) task.completed = true;
          break;
        case 'process':
          task.object.rotation.z += 0.1;
          if (Date.now() - task.startTime > 2000) task.completed = true;
          break;
      }
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create and add mouse
    const mouse = createMouse();
    mouseRef.current = mouse;
    scene.add(mouse);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Task management
      if (!currentTaskRef.current || currentTaskRef.current.completed) {
        // Entferne abgeschlossene Aufgabe
        if (currentTaskRef.current?.completed) {
          scene.remove(currentTaskRef.current.object);
        }
        
        // Erstelle neue Aufgabe
        if (Math.random() < 0.02) {
          currentTaskRef.current = createTask();
          targetPositionRef.current.copy(currentTaskRef.current.position);
        }
      }

      // Update mouse movement and task interaction
      updateMouseMovement();

      // Tail animation
      if (mouseRef.current) {
        const tail = mouseRef.current.children[mouseRef.current.children.length - 1];
        tail.rotation.x = Math.sin(time * 5) * 0.2;
        tail.rotation.y = Math.cos(time * 3) * 0.2;
      }

      time += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default MouseAgent3D;
