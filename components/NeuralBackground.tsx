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

    // Helper function to get CSS custom property values
    const getCSSVar = (varName: string): string => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
    };

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
          radius: Math.random() * 0.5 + 1.5, // Smaller solid dots (1.5-2px)
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

      // Helper to modify rgba opacity
      const modifyOpacity = (rgbaString: string, multiplier: number): string => {
        // Extract rgba values: rgba(r, g, b, a)
        const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]*)\)/);
        if (!match) return rgbaString;

        const [, r, g, b, a] = match;
        const alpha = parseFloat(a || '1') * multiplier;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      // Get theme colors from CSS variables
      const neuralLine = getCSSVar('--neural-line');
      const neuralGlow = getCSSVar('--neural-glow');
      const neuralNode = getCSSVar('--neural-node');
      const neuralNodeCore = getCSSVar('--neural-node-core');
      const neuralText = getCSSVar('--neural-text');

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
            const opacity = Math.max(0, 1 - distance / 400) * 0.5;

            // Simple solid line, no gradients
            const lineColor = modifyOpacity(neuralLine, opacity);

            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes - small, solid dots, very subtle
      nodesRef.current.forEach((node) => {
        // Solid dot with subtle visibility
        ctx.beginPath();
        ctx.fillStyle = modifyOpacity(neuralNode, 0.3);
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
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
