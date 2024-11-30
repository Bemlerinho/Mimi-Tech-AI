import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          opacity: 0,
        },
        particles: {
          color: {
            value: ['#0DAF94', '#13A7B0', '#0A1A2F'],
          },
          links: {
            color: '#13A7B0',
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'bounce',
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 100,
          },
          opacity: {
            value: 0.15,
            animation: {
              enable: true,
              speed: 0.4,
              minimumValue: 0.1,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
            },
          },
          wobble: {
            enable: true,
            distance: 5,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.3,
                color: '#0DAF94',
              },
            },
          },
        },
        detectRetina: true,
        fullScreen: false,
      }}
    />
  );
};

export default ParticleBackground;
