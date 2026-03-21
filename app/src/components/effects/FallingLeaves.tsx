import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
  color: string;
}

const leafColors = [
  '#10b981',
  '#059669',
  '#047857',
  '#34d399',
  '#6ee7b7',
  '#22c55e',
  '#16a34a',
];

export function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: Leaf[] = [];
      for (let i = 0; i < 18; i++) {
        newLeaves.push({
          id: i,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 8 + 10}s`,
          animationDelay: `${Math.random() * 8}s`,
          size: `${Math.random() * 16 + 12}px`,
          opacity: Math.random() * 0.4 + 0.2,
          color: leafColors[Math.floor(Math.random() * leafColors.length)],
        });
      }
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <svg
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            animationDuration: leaf.animationDuration,
            animationDelay: leaf.animationDelay,
            opacity: leaf.opacity,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C12 2 8 6 8 11C8 14 9.5 16.5 12 19C14.5 16.5 16 14 16 11C16 6 12 2 12 2Z"
            fill={leaf.color}
          />
          <path
            d="M12 19V22"
            stroke={leaf.color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}
