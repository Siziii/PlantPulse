import blobAnimation from '../../assets/blobAnimation_2.svg'
import Reveal from './../utils/Reveal';

const WhoWeAre = () => {
    return (
        <div className='bg-dark-primary'>
            
            <img src={blobAnimation} alt='blobanimation' className='absolute  w-full sm:w-[30rem] left-1/2 -translate-x-1/2 translate-y-8' />

            <div className="relative flex flex-col py-12  z-10">
                <div className="flex flex-col md:flex-row mb-8 mx-auto">

                    <div className="w-full md:w-1/2 px-8 md:hidden mb-4">
                        <Reveal>
                            <h1 className=" text-5xl font-thin text-accent">who we are</h1>
                        </Reveal>
                    </div>

                    <div className="w-full md:w-1/2 hidden md:flex md:flex-col md:justify-center mr-4 ">
                        <Reveal direction="left">
                            <h1 className=" text-8xl text-right font-thin text-accent">who</h1>
                            <h1 className=" text-8xl text-right font-thin text-accent">we are</h1>
                        </Reveal>
                    </div>

                    <div className="w-full md:w-1/2 px-4 max-w-lg ">
                        <Reveal direction="right">
                            <p className="align-bottom sm:text-lg border-t-[3px] border-white pt-4">
                                At <strong>PlantPulse</strong> we're passionate about bringing nature and technology together to create innovative solutions for plant enthusiasts. Founded with a vision to redefine the way we care for our green companions, we've set out on a journey to make plant nurturing a delightful and effortless experience.
                            </p>
                        </Reveal>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row mx-auto">
                    <div className="w-full md:w-1/2 px-8 md:hidden mb-4">
                        <Reveal>
                            <h1 className="text-5xl font-thin text-accent">our mission</h1>
                        </Reveal>
                    </div>

                    <div className="w-full md:w-1/2 px-4 md:mr-4 max-w-lg">
                        <Reveal direction="left">
                            <p className=" text-left md:text-right sm:text-lg border-t-[3px] border-white pt-4">
                                At <strong>PlantPulse</strong>, our unwavering commitment is to fuse nature and technology, crafting inventive solutions for plant enthusiasts. With a visionary ambition to revolutionize plant care, we embark on a mission to transform nurturing green companions into a seamless, joyous, and effortless experience.
                            </p>
                        </Reveal>
                    </div>

                    <div className="w-full md:w-1/2 hidden md:flex md:flex-col md:justify-center  ml-4">
                        <Reveal direction="right">
                            <h1 className="text-8xl font-thin text-accent">our</h1>
                            <h1 className="text-8xl font-thin text-accent">mission</h1>
                        </Reveal>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;