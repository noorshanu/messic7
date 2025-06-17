import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <section className="sm:pt-0 pt-3 relative overflow-hidden" id="about">
      <div className="container mx-auto pt-[2%]">
        <div className="relative flex justify-between flex-col sm:flex-row items-center gap-4">
          <motion.div
            className="w-full sm:w-1/2 rounded-xl p-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1
              className="p-2 text-3xl sm:text-6xl font-bold font-orbitron text-sad text-black mb-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              MEET MESSINCR7
            </motion.h1>

            <motion.p
              className="text-xl text-black font-grandstander font-semibold py-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              MESSINCR7 isn&apos;t just a token—it&apos;s a movement where football legends and crypto champions unite! Powered by Solana, inspired by the GOATs Messi and Ronaldo, MESSINCR7 brings the thrill of the pitch to the blockchain. Join a community that plays to win, celebrates every goal, and aims for legendary gains. Fast, fun, and full of passion—this is the memecoin for true fans and future champions. Are you ready to score big with us?
            </motion.p>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative">
              <motion.img
                src="NFT-Products-15.jpeg"
                alt="MessinCR7 NFT"
                className="rounded-3xl h-[400px] w-[400px] object-cover mx-auto shadow-2xl"
                initial={{ scale: 0.9, rotate: -8 }}
                whileHover={{ scale: 1.03, rotate: 0, boxShadow: '0 8px 32px #031faf55' }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              />
              {/* Animated football accent */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-cyan-500 rounded-full opacity-70"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
