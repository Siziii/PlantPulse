import planterImage from '../../assets/planter02.png';
import Reveal from './../utils/Reveal';
import { Link } from 'react-scroll';
const SmartPlanter = () => {

    return (
        <div className='bg-dark-secondary'>
            <div className='w-fit mx-auto '>
                <div className='flex flex-col sm:flex-row y py-12'>

                    <div className='hidden sm:flex sm:flex-col sm:w-3/5 px-8' >

                        <h1 className='text-7xl text-right font-light mb-4  mr-4'>Smart Planter</h1>

                        <div className='flex justify-end'>
                            <Reveal>
                                <p className='text-right mb-8 max-w-xl pl-12 text-lg' >
                                    Introducing our innovative <strong>smart planter</strong>, designed to elevate your plant care experience. Whether you're a seasoned horticulturist or just starting your indoor gardening journey, our smart planter is the perfect companion for thriving plant life. With cutting-edge technology and an eco-conscious design, it's the future of plant care.
                                </p>
                            </Reveal>
                        </div>

                        <div className='flex justify-end'>
                            <Reveal>

                                <Link
                                    to="shop"
                                    activeClass="opacity-100"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <button className='px-20 py-4 rounded-full bg-tertiary transform transition-transform hover:scale-105 hover:brightness-110'>
                                        Buy Now
                                    </button>
                                </Link>
                            </Reveal>
                        </div>

                    </div>



                    <div className='w-full sm:w-2/5 flex justify-center items-center sm:justify-start'>
                        <div className='sm:hidden absolute w-full -translate-y-16'>
                            <h1 className='text-[12vw] text-center font-light '>Smart Planter</h1>
                        </div>
                        <div className='hidden sm:block w-64'>
                            <Reveal direction="right">
                                <img src={planterImage} className='max-w-full h-auto' />
                            </Reveal>
                        </div>
                        <div className='sm:hidden max-w-sm'>
                            <img src={planterImage}/>
                        </div>
                    </div>

                    <div className='sm:hidden mx-auto' >
                        <Reveal>
                            <p className='px-8 pb-8 sm:text-lg max-w-lg'>
                                Introducing our innovative <strong>smart planter</strong>, designed to elevate your plant care experience. Whether you're a seasoned horticulturist or just starting your indoor gardening journey, our smart planter is the perfect companion for thriving plant life. With cutting-edge technology and an eco-conscious design, it's the future of plant care.
                            </p>
                        </Reveal>
                        <div className='flex justify-center pb-4'>
                            <Reveal>
                                <Link
                                    to="shop"
                                    activeClass="opacity-100"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <button className='px-20 py-4 rounded-full bg-primary transform transition-transform hover:scale-105 hover:brightness-110'>
                                        Buy Now
                                    </button>
                                </Link>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartPlanter;