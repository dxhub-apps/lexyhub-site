'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  keyword: string;
  connections: number[];
  radius: number;
  pulsePhase: number;
}

const keywords = [
  'AI', 'Learn', 'Data', 'Neural', 'Deep', 'Model', 'Train', 'Predict',
  'Analyze', 'Optimize', 'Process', 'Extract', 'Transform', 'Discover',
  'Pattern', 'Insight', 'Vision', 'Logic', 'Memory', 'Compute',
  'Network', 'Layer', 'Node', 'Weight', 'Bias', 'Gradient', 'Epoch',
  'Batch', 'Loss', 'Score', 'Feature', 'Vector', 'Matrix', 'Tensor',
  'Algorithm', 'Function', 'Output', 'Input', 'Hidden', 'Activate'
];

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize nodes on resize if they don't exist
      if (nodesRef.current.length === 0) {
        initNodes();
      }
    };

    const initNodes = () => {
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000);
      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        const connections: number[] = [];
        const numConnections = Math.floor(Math.random() * 3) + 2;

        const node: Node = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          keyword: keywords[Math.floor(Math.random() * keywords.length)],
          connections: [],
          radius: Math.random() * 2 + 3, // Much smaller radius (3-5px)
          pulsePhase: Math.random() * Math.PI * 2
        };

        nodesRef.current.push(node);
      }

      // Create connections after all nodes are created
      nodesRef.current.forEach((node, i) => {
        const numConnections = Math.floor(Math.random() * 3) + 2;
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * nodesRef.current.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
    };

    const updateNodes = () => {
      nodesRef.current.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges with some padding
        if (node.x < -100) {
          node.x = canvas.width + 100;
        } else if (node.x > canvas.width + 100) {
          node.x = -100;
        }

        if (node.y < -100) {
          node.y = canvas.height + 100;
        } else if (node.y > canvas.height + 100) {
          node.y = -100;
        }

        // Update pulse phase
        node.pulsePhase += 0.02;
      });
    };

    const drawNodes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first (behind nodes)
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((targetIndex) => {
          const target = nodesRef.current[targetIndex];
          if (!target) return;

          const distance = Math.sqrt(
            Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
          );

          // Only draw connection if nodes are reasonably close
          if (distance < 400) {
            const opacity = Math.max(0, 1 - distance / 400) * 0.15;

            // Animated pulse along the connection
            const pulsePosition = (Math.sin(node.pulsePhase) + 1) / 2;
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);

            gradient.addColorStop(0, `rgba(100, 100, 100, ${opacity * 0.5})`);
            gradient.addColorStop(pulsePosition, `rgba(150, 150, 150, ${opacity * 1.2})`);
            gradient.addColorStop(1, `rgba(100, 100, 100, ${opacity * 0.5})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodesRef.current.forEach((node) => {
        const pulse = Math.sin(node.pulsePhase) * 0.2 + 1;
        const currentRadius = node.radius * pulse;

        // Outer glow (subtle)
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, currentRadius * 3
        );
        gradient.addColorStop(0, 'rgba(140, 140, 140, 0.4)');
        gradient.addColorStop(1, 'rgba(140, 140, 140, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, currentRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Node dot (small and bright)
        ctx.beginPath();
        ctx.fillStyle = 'rgba(180, 180, 180, 0.8)';
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core highlight (bright center)
        ctx.beginPath();
        ctx.fillStyle = 'rgba(220, 220, 220, 0.9)';
        ctx.arc(node.x, node.y, currentRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw keyword text in terminal font (small, positioned to the right)
        ctx.fillStyle = 'rgba(120, 120, 120, 0.5)';
        ctx.font = '8px "Courier New", Courier, monospace';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.keyword, node.x + currentRadius + 6, node.y);
      });
    };

    const animate = () => {
      updateNodes();
      drawNodes();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-background"
      style={{
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
}
