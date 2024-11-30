import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface Agent {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SwarmBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const agents = useRef<Agent[]>([]);
  const animationFrameId = useRef<number>();

  const initAgents = (width: number, height: number) => {
    const numberOfAgents = 50;
    agents.current = Array.from({ length: numberOfAgents }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));
  };

  const updateAgents = (width: number, height: number) => {
    agents.current.forEach(agent => {
      // Update position
      agent.x += agent.vx;
      agent.y += agent.vy;

      // Bounce off walls
      if (agent.x < 0 || agent.x > width) agent.vx *= -1;
      if (agent.y < 0 || agent.y > height) agent.vy *= -1;

      // Add slight random movement
      agent.vx += (Math.random() - 0.5) * 0.1;
      agent.vy += (Math.random() - 0.5) * 0.1;

      // Limit velocity
      const speed = Math.sqrt(agent.vx * agent.vx + agent.vy * agent.vy);
      if (speed > 2) {
        agent.vx = (agent.vx / speed) * 2;
        agent.vy = (agent.vy / speed) * 2;
      }
    });
  };

  const drawAgents = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    
    // Draw connections
    ctx.strokeStyle = 'rgba(19, 167, 176, 0.1)';
    ctx.lineWidth = 1;
    
    agents.current.forEach((agent1, i) => {
      agents.current.slice(i + 1).forEach(agent2 => {
        const dx = agent1.x - agent2.x;
        const dy = agent1.y - agent2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(agent1.x, agent1.y);
          ctx.lineTo(agent2.x, agent2.y);
          ctx.stroke();
        }
      });
    });

    // Draw agents
    ctx.fillStyle = 'rgba(19, 167, 176, 0.5)';
    agents.current.forEach(agent => {
      ctx.beginPath();
      ctx.arc(agent.x, agent.y, 2, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (canvas && ctx) {
      updateAgents(canvas.width, canvas.height);
      drawAgents(ctx, canvas.width, canvas.height);
    }
    
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initAgents(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default SwarmBackground;
