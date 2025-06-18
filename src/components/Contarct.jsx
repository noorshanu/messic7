import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaCheck } from "react-icons/fa";

function Contarct() {
  const [copied, setCopied] = useState(false);
  const contract = "EfKc6ad9VS6VMEP9LVHUT42o5fH2P1mG3kt7Keddpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="py-12 px-2">
      <div className="container mx-auto flex justify-center">
        <motion.div
          className="relative  border-2 py-8 border-[#f5c733] rounded-3xl shadow-2xl w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="font-orbitron text-white text-5xl sm:text-7xl font-bold text-center mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Contract
          </motion.h1>

          <motion.div
            className="flex flex-col items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="font-grandstander text-black text-lg sm:text-2xl font-bold text-center break-all bg-white/80 px-4 py-2 rounded-xl border-2 border-[#feb244]">
              {contract}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 mt-1 px-4 py-2 bg-[#ffcc33] border-2 border-[#feb244] rounded-xl text-[#600214] font-grandstander font-bold text-lg shadow hover:bg-[#feb244] active:scale-95 transition-all duration-150"
            >
              {copied ? <FaCheck className="text-green-600" /> : <FaCopy />} {copied ? "Copied!" : "Copy"}
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <motion.a
              href="/"
              className="py-2 text-3xl font-grandstander text-white rounded-3xl border-4 border-[#feb244] bg-[#ffcc33] px-12 shadow-lg hover:bg-[#feb244] hover:text-[#600214] active:scale-95 transition-all duration-150"
              whileHover={{ scale: 1.06, boxShadow: "0 0 24px #ffcc33" }}
              whileTap={{ scale: 0.97 }}
            >
              Buy Now
            </motion.a>
          </motion.div>

          <motion.img
            src="ronaldo.png"
            alt="Mascot"
            className="absolute -bottom-4 right-0 h-[100px] sm:h-[200px] md:h-[200px] lg:h-[200px] drop-shadow-xl select-none pointer-events-none"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ zIndex: 2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Contarct;
