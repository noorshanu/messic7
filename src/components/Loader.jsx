import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 1, 100));
      } else {
        setTimeout(() => setLoading(false), 500);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progress, setLoading]);

  const ballVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const dotsVariants = {
    animate: {
      y: [-2, 2],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        staggerChildren: 0.2
      }
    }
  };

  const dotVariant = {
    animate: {
      y: [-2, 2],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-[#39FF14] text-5xl md:text-6xl font-bold font-orbitron mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textShadow: "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14"
        }}
      >
        MESSINCR7
      </motion.h1>

      <div className="relative w-full max-w-md px-4">
        {/* Football animation */}
        <motion.div
          className="w-8 h-8 bg-white rounded-full absolute left-1/2 -translate-x-1/2 -top-10"
          variants={ballVariants}
          animate="animate"
          style={{
            background: "radial-gradient(circle at 30% 30%, white, #000000)",
            boxShadow: "0 0 10px rgba(255,255,255,0.5)"
          }}
        />

        {/* Progress bar */}
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#39FF14]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center mt-4 space-x-2"
          variants={dotsVariants}
          animate="animate"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-[#39FF14] rounded-full"
              variants={dotVariant}
              style={{
                boxShadow: "0 0 10px #39FF14"
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-gray-400 text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader; 