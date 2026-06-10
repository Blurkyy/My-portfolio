"use client";

import { useEffect, useRef } from "react";

export default function AntiGravityParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };

    // Setup Canvas Resolution
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      baseAlpha: number;
      originalSize: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Slow float speeds
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.originalSize = Math.random() * 2 + 1;
        this.size = this.originalSize;
        
        // Choose between Violet-Purple and Cyan-Blue theme colors
        const colors = [
          "rgba(139, 92, 246, ",  // Violet
          "rgba(6, 182, 212, ",   // Cyan
          "rgba(236, 72, 153, ",  // Pink
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.4 + 0.2;
        this.alpha = this.baseAlpha;
      }

      update(w: number, h: number) {
        // Natural float drift
        this.x += this.vx;
        this.y += this.vy;

        // Interaction with Cursor (Repulsion force)
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 140;

          if (dist < maxDist) {
            // Push direction vector
            const force = (maxDist - dist) / maxDist; // 1 at center, 0 at outer bound
            const strength = 1.8; // Intensity of push

            // Calculate acceleration
            const ax = (dx / dist) * force * strength;
            const ay = (dy / dist) * force * strength;

            // Shift position gently and add minor velocity push
            this.x += ax;
            this.y += ay;
            this.alpha = Math.min(1.0, this.baseAlpha + force * 0.4);
            this.size = this.originalSize + force * 1.5;
          } else {
            // Decelerate size and opacity back to normal
            this.alpha += (this.baseAlpha - this.alpha) * 0.05;
            this.size += (this.originalSize - this.size) * 0.05;
          }
        } else {
          this.alpha += (this.baseAlpha - this.alpha) * 0.05;
          this.size += (this.originalSize - this.size) * 0.05;
        }

        // Screen wrap around or bounce
        const buffer = 10;
        if (this.x < -buffer) this.x = w + buffer;
        if (this.x > w + buffer) this.x = -buffer;
        if (this.y < -buffer) this.y = h + buffer;
        if (this.y > h + buffer) this.y = -buffer;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = `${this.color}0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow blur
      }
    }

    const initParticles = () => {
      const w = canvas.getBoundingClientRect().width;
      const h = canvas.getBoundingClientRect().height;
      // Adjust density based on screen space
      const particleCount = Math.min(75, Math.floor((w * h) / 18000));
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    // Main animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Update and Draw Particles
      particles.forEach((p) => {
        p.update(w, h);
        p.draw();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 90;

          if (dist < maxDist) {
            // Check if particles are also near the cursor for visual accentuation
            let intensity = 1 - dist / maxDist;
            let nearMouse = false;

            if (mouse.active) {
              const mouseDistI = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
              const mouseDistJ = Math.hypot(particles[j].x - mouse.x, particles[j].y - mouse.y);
              
              if (mouseDistI < 150 || mouseDistJ < 150) {
                nearMouse = true;
                intensity *= 1.5;
              }
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Highlight connections near cursor
            if (nearMouse) {
              ctx.strokeStyle = `rgba(139, 92, 246, ${intensity * 0.12})`;
              ctx.lineWidth = 0.8;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${intensity * 0.035})`;
              ctx.lineWidth = 0.5;
            }
            ctx.stroke();
          }
        }
      }

      // Draw active line connections to mouse
      if (mouse.active) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const intensity = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${intensity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Mouse Listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    animate();

    // Cleanup listeners
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
}
