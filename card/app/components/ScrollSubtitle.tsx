


"use client";
import { motion } from 'framer-motion';

const ScrollSubtitle = () => {
  return (
    <motion.div
      className="text-center mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-xl md:text-4xl font-bold text-gray-800 bg-clip-text mb-3 md:mb-8">
        Carta a Papá
      </h2>
      <p className="text-sm md:text-lg text-gray-700">Haz scroll para ver la carta</p>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', repeatType: 'reverse' }}
      >
        <svg
          className="w-6 h-6 mx-auto mt-2 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollSubtitle;
