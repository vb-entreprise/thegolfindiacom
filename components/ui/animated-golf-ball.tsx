'use client';

import { motion } from "framer-motion";

export const AnimatedGolfBall = () => {
  return (
    <motion.div
      className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full shadow-2xl"
      initial={{ y: 0 }}
      animate={{
        y: [-15, 0],
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
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1.5 p-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-full opacity-50" />
        ))}
      </div>
    </motion.div>
  );
}; 