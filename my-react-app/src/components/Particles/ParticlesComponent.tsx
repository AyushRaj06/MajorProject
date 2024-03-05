import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
}

interface ParticlesOptions {
  count: number;
  maxRadius: number;
  color: string;
  maxSpeed: number;
  width: number;
  height: number;
}

interface Props {
  particlesOptions: ParticlesOptions;
  className?: string;
  id?: string;
}

const ParticlesComponent: React.FC<Props> = ({ particlesOptions, className = "", id = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let isInitialized = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const particles: Particle[] = [];

    const initializeParticles = () => {
      if (!isInitialized) {
        for (let i = 0; i < particlesOptions.count; i++) {
          const particle: Particle = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * particlesOptions.maxRadius,
            color: particlesOptions.color,
            speedX: Math.random() * particlesOptions.maxSpeed - particlesOptions.maxSpeed / 2,
            speedY: Math.random() * particlesOptions.maxSpeed - particlesOptions.maxSpeed / 2,
          };
          particles.push(particle);
        }
        isInitialized = true;
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        drawParticle(particle);
      });
    };

    const animate = () => {
      initializeParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <canvas
      id={id}
      className={className}
      ref={canvasRef}
      width={particlesOptions.width}
      height={particlesOptions.height}
    ></canvas>
  );
};

export default ParticlesComponent;
