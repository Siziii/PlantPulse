import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const Preloader = () => {
  return (
    <motion.div
      initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
      transition={{ duration: 0.3, type: 'tween' }}
      className="bg-dark-primary w-screen h-screen fixed z-50 flex justify-center items-center overflow-hidden"
    >
      <img src={logo} alt="logo" className="h-20 animate-pulse" />
    </motion.div>
  );
};

export default Preloader;
