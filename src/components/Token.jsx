import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: 'TAX',
    value: '0% Tax',
    img: '/NFT-Product-3.jpeg',
  },
  {
    title: 'SUPPLY',
    value: '100 Million',
    img: '/NFT-Product-3.jpeg',
  },
  {
    title: 'LP',
    value: '100% BURN',
    img: '/NFT-Product-3.jpeg',
  },
];

function Token() {
  return (
    <section className="flex items-center justify-center px-6 mt-10 lg:mt-10  py-12 " id="tokenomics">
      <div className="text-center w-full">
        <motion.h3
          className="font-bold text-[32px] lg:text-[36px] xl:text-[40px]  mb-2 font-orbitron text-[#000000] drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Two legends. Two eras.
        </motion.h3>
        <motion.p
          className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mb-4 text-[#000000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          One token to rule them all.
        </motion.p>
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-evenly gap-6  border-4 border-[#f5c733] rounded-3xl py-8 px-4 shadow-2xl">
            {cardData.map((card, i) => (
              <motion.div
                key={card.title}
                className="flex flex-col items-center bg-gradient-to-b from-[#f5c733]/80 to-[#011966]/90 border-4 border-[#011966] rounded-2xl p-6 shadow-lg transition-all duration-200 cursor-pointer hover:shadow-2xl"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: 'easeOut' }}
          
              >
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] mx-auto rounded-2xl border-4 border-[#f5c733] mb-4 shadow-md"
                  initial={{ scale: 0.95, rotate: -6 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />
                <motion.h1
                  className="font-grandstander text-3xl sm:text-5xl font-bold py-1 text-[#ffffff] drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.2 + 0.15 * i, ease: 'easeOut' }}
                >
                  {card.title}
                </motion.h1>
                <motion.h2
                  className="font-grandstander text-2xl sm:text-3xl font-bold py-1 text-[#f5c733] drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.3 + 0.15 * i, ease: 'easeOut' }}
                >
                  {card.value}
                </motion.h2>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.p
          className="font-medium leading-7 text-lg xl:text-xl mx-auto font-grandstander mt-8 text-[#000000]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          Messi&apos;s magic meets Ronaldo&apos;s power in the most iconic memecoin ever created! $MessinCr7 isn&apos;t just a tribute to football&apos;s greatest – it&apos;s a symbol of unity, passion, and unstoppable energy. Whether you&apos;re Team Messi or Team Ronaldo, one thing&apos;s for sure: this is the GOAT token the crypto world has been waiting for. Built by fans, powered by the community, and ready to dominate the field of Web3.
        </motion.p>
        <div className="relative max-w-4xl mx-auto mt-6">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f5c733]/10 to-[#011966]/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Token;