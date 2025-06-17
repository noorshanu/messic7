import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Token() {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = circleRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // max 15deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setTilt({ x: y, y: -x });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="flex items-center justify-center px-6 mt-10 lg:mt-10" id="tokenomics">
      <div className="text-center">
        <h3 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] font-black mb-2 font-orbitron">
          Two legends. Two eras.
        </h3>
        <p className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mb-4">
          One token to rule them all.
        </p>
        
        <div className="w-full flex items-center justify-center">
          <div className="flex justify-center items-center h-64">
            <motion.div
              ref={circleRef}
              className="relative w-60 h-60 cursor-pointer"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              animate={{
                scale: isHovered ? 1.08 : 1,
         
                rotateX: tilt.x,
                rotateY: tilt.y,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Shadow layer */}
              <div className="absolute w-full h-full rounded-full bg-[#3d8f47] shadow-inner transform -translate-y-2"></div>
              {/* Main circle */}
              <div className="absolute w-full h-full rounded-full bg-[#4eaf5a]">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <motion.span
                    initial={{ opacity: 0, y: 24, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    animate={isHovered ? { scale: 1.2, opacity: 1, y: -8 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="text-white text-2xl font-bold"
                  >
                    100%
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 24, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    animate={isHovered ? { scale: 1.15, opacity: 1, y: -4 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
                    className="text-white text-2xl font-bold"
                  >
                    Liquidity Pool
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <p className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mt-4">
          Messi's magic meets Ronaldo's power in the most iconic memecoin ever created! $MessinCr7 isn't just a tribute to football's greatest – it's a symbol of unity, passion, and unstoppable energy. Whether you're Team Messi or Team Ronaldo, one thing's for sure: this is the GOAT token the crypto world has been waiting for. Built by fans, powered by the community, and ready to dominate the field of Web3.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;