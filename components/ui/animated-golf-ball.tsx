'use client';

import { motion } from "framer-motion";

export const AnimatedGolfBall = () => {
  return (
    <motion.div
      className="relative w-8 h-8 bg-white rounded-full shadow-lg"
      initial={{ y: 0 }}
      animate={{
        y: [-10, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {/* Golf ball dimples pattern */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-full opacity-50" />
        ))}
      </div>
    </motion.div>
  );
}; 