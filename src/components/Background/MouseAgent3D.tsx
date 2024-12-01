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

interface MousePhysics {
  velocity: THREE.Vector3;
  acceleration: THREE.Vector3;
  rotation: THREE.Vector3;
  bobbing: {
    phase: number;
    amplitude: number;
    frequency: number;
  };
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
  const physicsRef = useRef<MousePhysics>({
    velocity: new THREE.Vector3(),
    acceleration: new THREE.Vector3(),
    rotation: new THREE.Vector3(),
    bobbing: {
      phase: 0,
      amplitude: 0.05,
      frequency: 2
    }
  });

  // Stabilere Bewegungsparameter
  const MOVEMENT = {
    MAX_SPEED: 0.025,        // Gleiche Geschwindigkeit
    ACCELERATION: 0.003,     // Noch sanftere Beschleunigung
    DECELERATION: 0.98,      // Gleiches Abbremsen
    ROTATION_SPEED: 0.02,    // Langsamere Drehung für mehr Stabilität
    MIN_DISTANCE: 0.2,       // Gleicher Mindestabstand
    TILT_FACTOR: 0.02,       // Deutlich reduzierte Neigung
    BOUNCE_SPEED: 0.0003     // Minimal sichtbares Schweben
  };

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

  const updateMouseMovement = (time: number) => {
    if (!mouseRef.current || !currentTaskRef.current) return;

    const mouse = mouseRef.current;
    const physics = physicsRef.current;
    const target = targetPositionRef.current;
    const direction = new THREE.Vector3().subVectors(target, mouse.position);
    const distance = direction.length();

    // Stabilere Bewegung
    if (distance > MOVEMENT.MIN_DISTANCE) {
      direction.normalize();
      
      // Sehr sanfte Beschleunigung ohne Wackeln
      physics.acceleration.copy(direction).multiplyScalar(MOVEMENT.ACCELERATION);
      physics.velocity.lerp(physics.acceleration, 0.03); // Noch sanftere Interpolation
      
      if (physics.velocity.length() > MOVEMENT.MAX_SPEED) {
        physics.velocity.normalize().multiplyScalar(MOVEMENT.MAX_SPEED);
      }

      mouse.position.add(physics.velocity);
      
      // Stabilere Rotation ohne abrupte Änderungen
      const targetRotation = Math.atan2(physics.velocity.x, physics.velocity.z);
      const currentRotation = mouse.rotation.y;
      const rotationDiff = Math.atan2(Math.sin(targetRotation - currentRotation), Math.cos(targetRotation - currentRotation));
      mouse.rotation.y += rotationDiff * MOVEMENT.ROTATION_SPEED;
      
      // Minimale, stabile Neigung
      const tilt = physics.velocity.length() * MOVEMENT.TILT_FACTOR;
      mouse.rotation.z += (-physics.velocity.x * tilt - mouse.rotation.z) * 0.02;
      mouse.rotation.x += (physics.velocity.z * tilt - mouse.rotation.x) * 0.02;

      // Sehr dezente Hüpfbewegung
      physics.bobbing.phase += physics.velocity.length() * 0.3;
      const bounce = Math.sin(physics.bobbing.phase) * 0.005 * Math.min(0.2, physics.velocity.length());
      mouse.position.y += bounce;
    } else {
      // Sanftes Abbremsen ohne Wackeln
      physics.velocity.multiplyScalar(MOVEMENT.DECELERATION);
      mouse.position.add(physics.velocity);
      
      // Sehr sanfte Rückkehr zur Ausgangsposition
      mouse.rotation.z *= 0.99;
      mouse.rotation.x *= 0.99;
      
      // Kaum sichtbares Schweben im Ruhezustand
      physics.bobbing.phase += MOVEMENT.BOUNCE_SPEED;
      const idleBounce = Math.sin(physics.bobbing.phase) * 0.003;
      mouse.position.y += idleBounce;

      // Aufgabeninteraktionen
      if (!currentTaskRef.current.completed) {
        switch (currentTaskRef.current.type) {
          case 'analyze':
            currentTaskRef.current.object.scale.multiplyScalar(0.99);
            if (currentTaskRef.current.object.scale.x < 0.1) currentTaskRef.current.completed = true;
            break;
          case 'collect':
            currentTaskRef.current.object.position.lerp(mouse.position, 0.02);
            if (currentTaskRef.current.object.position.distanceTo(mouse.position) < 0.1) {
              currentTaskRef.current.completed = true;
              const scale = currentTaskRef.current.object.scale;
              scale.x = scale.y = scale.z = Math.max(0.01, scale.x * 0.95);
            }
            break;
          case 'process':
            currentTaskRef.current.object.rotation.z += 0.02;
            if (Date.now() - currentTaskRef.current.startTime > 2000) currentTaskRef.current.completed = true;
            break;
        }
      }
    }

    // Minimale Schwanzanimation
    const tail = mouse.children[mouse.children.length - 1];
    const velocityMagnitude = physics.velocity.length();
    
    // Sehr subtile Schwanzbewegung
    tail.rotation.x = Math.sin(time * 1.2) * 0.02 * (velocityMagnitude + 0.1);
    tail.rotation.y = Math.cos(time * 0.8) * 0.02 * (velocityMagnitude + 0.1);
    tail.rotation.z = Math.sin(time * 1.0) * 0.01 * velocityMagnitude;
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
      time += 0.01;
      
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
      updateMouseMovement(time);

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
