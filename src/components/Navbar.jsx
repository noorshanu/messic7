import { useState } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.nav 
      className="sticky top-0 z-50 w-full backdrop-blur-sm border-b border-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 bg-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/" className="font-grandstander text-black text-2xl font-bold hover:text-gray-600 transition-colors duration-300">
              MESSINCR7
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'Tokenomics', 'Memes'].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="font-grandstander text-black hover:text-gray-600 px-3 py-2 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { Icon: FaTwitter, href: 'https://twitter.com' },
              { Icon: FaTelegram, href: 'https://t.me/messincr7' }
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors duration-300"
                variants={socialIconVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={toggleSidebar}
              className="text-black hover:text-gray-600 p-2 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-screen w-64 bg-white backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-end p-4 bg-white">
                <motion.button
                  onClick={toggleSidebar}
                  className="text-black hover:text-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="h-6 w-6" />
                </motion.button>
              </div>
              
              <motion.div 
                className="flex flex-col px-4 py-6 space-y-4 bg-white"
              >
                {['Home', 'Tokenomics', 'Memes'].map((item, i) => (
                  <motion.div
                    key={item}
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.1 }
                      },
                      closed: {
                        opacity: 0,
                        y: 20
                      }
                    }}
                  >
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="font-grandstander text-black hover:text-gray-600 py-2 block transition-colors duration-300"
                      onClick={toggleSidebar}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="flex justify-center space-x-6 mt-8"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { delay: 0.3 }
                  },
                  closed: { opacity: 0 }
                }}
              >
                {[
                  { Icon: FaTwitter, href: 'https://twitter.com' },
                  { Icon: FaTelegram, href: 'https://t.me/messincr7' }
                ].map(({ Icon, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 