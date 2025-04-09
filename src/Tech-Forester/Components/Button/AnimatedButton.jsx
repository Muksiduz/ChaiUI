import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedBorderButton() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({ rotate: 360, transition: { repeat: Infinity, duration: 1, ease: 'linear' } });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({ rotate: 360, transition: { repeat: Infinity, duration: 3, ease: 'linear' } });
  };

  return (
    <div
      className="relative inline-block p-[2px] rounded-xl overflow-hidden"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 z-0 rounded-xl blur-sm"
        style={{
          background: 'conic-gradient(from 0deg, #facc15, #f59e0b, #facc15)',
        }}
        animate={controls}
      />

      {/* Button Inside */}
      <div className="relative z-10 bg-white rounded-xl">
        <button className="px-6 py-2 text-yellow-600 font-semibold rounded-xl bg-white hover:bg-yellow-50 transition duration-300">
          Animated Glow
        </button>
      </div>
    </div>
  );
}
