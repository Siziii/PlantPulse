import planterImage from '../assets/planter01.png';
import blobAnimation from '../assets/blobAnimation.svg'
import { AiOutlineArrowDown } from 'react-icons/ai';
import circle_outline from '../assets/circle_outline.svg'
import Reveal from './utils/Reveal';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div id="home">
            <div className='flex flex-col h-screen'>

                {/* Blob animation */}
                <img src={blobAnimation} alt='blobanimation' className='absolute -z-10 w-full sm:w-[30rem] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2' />

                {/* Title and image */}
                <Reveal>
                <h1 className='pointer-events-none text-vw-16 lg:text-[12rem] xl:text-[15rem] mt-[20vh] sm:mt-40 md:mt-32 lg:mt-20 font-black text-center text-dark-primary'>DISCOVER</h1>
                </Reveal>
                <img src={planterImage} alt='Planterimage' className='pointer-events-none absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[35rem]' />

            </div>
            <div className='absolute bottom-0 w-full -z-10 h-36 bg-tertiary' />
            <Reveal>
                <Link to="about" smooth={true} offset={-64} duration={500}>
                    <div className='absolute bottom-0 w-full z-20 h-36 flex flex-col items-center justify-center'>
                        <img src={circle_outline} className='absolute w-14 animate-spin-slow' />
                        <button className=' z-10 cursor-pointer bg-dark-primary rounded-full p-4 hover:scale-110 transition-all'><AiOutlineArrowDown size={25} /></button>
                    </div>
                </Link>
            </Reveal>
        </div>

    );
}

export default Hero;