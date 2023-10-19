import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import logo from '../assets/logo.svg';
import Cart from './Cart';
import { motion, AnimatePresence } from 'framer-motion';
import NavBarMobile from './navbar-components/NavbarMobile';
import circle_outline from '../assets/circle_outline.svg'
import { useCart } from '../CartContext';
import NavbarDesktop from './navbar-components/NavbarDesktop';

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { getTotalItems } = useCart();

    const handleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    }

    const cartDropIn = {
        hidden: {
            y: "-100vh",
            transition: {
                type: "easeIn",
                duration: .5,
            }
        },
        visible: {
            y: "4rem",
            transition: {
                type: "ease",
                duration: .5,
            }
        },
    }

    const navDropIn = {
        hidden: {
            x: "-100vw",
            y: "4rem",
            transition: {
                type: "easeIn",
                duration: .5,
            }
        },
        visible: {
            x: "0",
            y: "4rem",
            transition: {
                type: "ease",
                duration: .5,
            }
        },
    }

    return (
        <div>
            <div className={'z-40 fixed left-0 top-0 w-full'}>
                <div className={`flex justify-between items-center h-16 mx-auto px-8 text-white bg-[#262524]`}>

                    {/* Cart icon mobile*/}
                    <div className='md:hidden lg:w-60'>
                        <div className='flex justify-end'>
                            <button onClick={() => toggleCart()}>
                                <BsFillCartFill size={24} />
                                {getTotalItems() > 0 && (
                                    <div className='absolute w-8 -translate-y-[34px] -translate-x-1 opacity-10'>
                                        <img src={circle_outline} className='animate-spin-slow' />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Title*/}
                    <div className='flex items-center lg:w-60'>
                        <img src={logo} alt="logo" className='h-10 sm:mr-4' />
                        <h1 className='hidden sm:block text-xl sm:text-3xl font-bold'>PlantPulse</h1>
                    </div>

                    <NavbarDesktop />

                    {/* Cart icon desktop*/}
                    <div className='hidden md:block lg:w-60'>
                        <div className='flex justify-end'>
                            <button className='hover:opacity-100 transition-all' onClick={() => toggleCart()}>
                                <BsFillCartFill size={24} />
                                {getTotalItems() > 0 && (
                                    <div className='absolute w-8 -translate-y-[34px] -translate-x-1 opacity-10'>
                                        <img src={circle_outline} className='animate-spin-slow' />
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* hamburger menu icon*/}
                    <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                        {isNavVisible ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </div>

                </div>

            </div>

            {/* mobile dropdowns*/}

            <div className='z-30 fixed left-0 top-0 w-full'>
                <AnimatePresence
                    initial={false}
                    mode="wait"
                >
                    {isNavVisible && (
                        <motion.div
                            initial="hidden"
                            animate={isNavVisible ? "visible" : "hidden"}
                            exit="hidden"
                            variants={navDropIn}
                        >
                            <NavBarMobile isNavVisible={isNavVisible} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='z-30 fixed left-0 top-0 w-full'>
                <AnimatePresence
                    initial={false}
                    mode="wait"
                >
                    {isCartVisible && (
                        <motion.div
                            initial="hidden"
                            animate={isCartVisible ? "visible" : "hidden"}
                            exit="hidden"
                            variants={cartDropIn}
                        >
                            <Cart isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* overlay */}
            <div className={`z-20 fixed w-screen h-screen bg-black-overlay ${isCartVisible || isNavVisible ? 'visible' : 'hidden'}`}/>
        </div>
    );
};

export default Navbar;
