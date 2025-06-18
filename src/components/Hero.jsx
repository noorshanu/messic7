import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaChartLine, FaSearchDollar } from 'react-icons/fa';

function Hero() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('EfKc6ad9VS6VMEP9LVHUT42o5fH2P1mG3kt7Keddpump');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section className="flex items-center justify-center md:px-6 relative overflow-hidden">
      {/* Background soccer ball patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-black rounded-full" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-black rounded-full" />
        <div className="absolute top-40 right-20 w-12 h-12 border-4 border-black rounded-full" />
      </div>

      <div className="lg:px-[111px] px-5 xl:px-[190px] min-h-[500px] lg:min-h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative">
        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-[36px] lg:text-[42px] xl:text-[46px] font-black mb-6 font-orbitron"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Introducing $MSNCR7
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-orange-500 mb-6"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="font-medium leading-7 mt-1 md:max-w-[430px] text-xl leading-relaxed mb-8 font-grandstander"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Where Greatness Meets Blockchain 🐐⚽🐐<br />
          </motion.p>
          
          <motion.div 
            className="relative flex flex-col items-start space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="font-semibold flex flex-row items-center justify-center text-center space-x-5 px-3 md:px-6 border border-[#9e782c] shadow-[1px_1px_0_#9e782c] bg-yellow-50 text-black text-[17px] py-3 rounded-xl hover:shadow-lg transition-all duration-300">
              <span>CA:</span>
              <span>EfKc6ad....Keddpump</span>
              <motion.button 
                onClick={handleCopyClick}
                className="font-semibold cursor-pointer px-4 uppercase border border-[#9e782c] shadow-[2px_2px_0_#9e782c] active:shadow-[0.5px_0.5px_0_#9e782c] text-white transition-all ease-linear duration-100 bg-yellow-500/70 text-[14px] md:text-[17px] py-2 rounded-xl hover:bg-yellow-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copySuccess ? 'Copied!' : 'COPY'} <FaCopy className="inline ml-1" />
              </motion.button>
            </div>

            {/* DEX Links */}
            <div className="flex space-x-4">
              <motion.a
                href="https://www.dextools.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-[#1c1c1c] text-white rounded-xl hover:bg-[#2c2c2c] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChartLine className="mr-2" /> DexTools
              </motion.a>
              <motion.a
                href="https://dexscreener.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-[#1c1c1c] text-white rounded-xl hover:bg-[#2c2c2c] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSearchDollar className="mr-2" /> DexScreener
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src="/ronaldo.png"
              alt="Featured NFT"
              className="w-full h-80 lg:h-96 object-contain"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            
            {/* Animated soccer ball decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 border-2 border-cyan-500 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;