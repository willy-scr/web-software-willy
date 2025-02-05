import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  animDuration: number;
  rotateDirection: number;
  scaleRange: [number, number];
}

interface BubbleAnimationProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  duration?: number;
  className?: string;
}

export const BubbleAnimation = ({
  count = 10,
  minSize = 10,
  maxSize = 30,
  duration = 3,
  className = "",
}: BubbleAnimationProps) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const colors = [
    "bg-gradient-to-br from-[#9D4EDD]/20 to-[#C77DFF]/20",
    "bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20",
    "bg-gradient-to-br from-[#5A189A]/20 to-[#7B2CBF]/20",
    "bg-gradient-to-br from-[#FF5DA2]/20 to-[#FF99D7]/20",
    "bg-gradient-to-br from-[#B5179E]/20 to-[#FF5DA2]/20",
    "bg-gradient-to-br from-[#7209B7]/20 to-[#B5179E]/20",
  ];

  const createBubble = (baseDuration: number): Bubble => {
    const id = Date.now() + Math.random();
    const x = Math.random() * 100;
    const y = 100 + Math.random() * 20;
    const size = Math.random() * (maxSize - minSize) + minSize;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 2;
    const animDuration = (Math.random() * 3 + 4) * baseDuration;
    const rotateDirection = Math.random() > 0.5 ? 1 : -1;
    const scaleRange: [number, number] = [
      0.8 + Math.random() * 0.2,
      1.2 + Math.random() * 0.3,
    ];

    return {
      id,
      x,
      y,
      size,
      color,
      delay,
      animDuration,
      rotateDirection,
      scaleRange,
    };
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (bubbles.length < count) {
          setBubbles((prev) => [...prev, createBubble(duration)]);
        }
      },
      (duration * 1000) / count,
    );

    return () => clearInterval(interval);
  }, [bubbles.length, count, duration]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{
              x: `${bubble.x}%`,
              y: `${bubble.y}%`,
              opacity: 0,
              scale: bubble.scaleRange[0],
              rotate: 0,
            }}
            animate={{
              y: "-100%",
              opacity: [0, 0.8, 0],
              scale: [
                bubble.scaleRange[0],
                bubble.scaleRange[1],
                bubble.scaleRange[0],
              ],
              rotate: [0, 360 * bubble.rotateDirection],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: bubble.animDuration,
              delay: bubble.delay,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              opacity: {
                duration: bubble.animDuration * 0.8,
              },
              scale: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: bubble.animDuration * 0.4,
              },
              rotate: {
                duration: bubble.animDuration,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className={`absolute rounded-full backdrop-blur-sm ${bubble.color}`}
            style={{
              width: bubble.size,
              height: bubble.size,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
