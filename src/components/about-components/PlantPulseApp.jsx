import phone from '../../assets/phone.png'
import app_apple from '../../assets/app_apple.svg'
import app_store from '../../assets/app_store.svg'
import Reveal from './../utils/Reveal'

const PlantPulseApp = () => {
    return (
        <div className='bg-dark-primary'>
            <div className='w-fit mx-auto '>
                <div className='flex flex-col sm:flex-row  py-12'>

                    <div className='sm:hidden w-full'>
                        <Reveal>
                        <h1 className='text-[12vw] text-center font-light '>Plant Pulse App</h1>
                        </Reveal>
                    </div>

                    <div className='w-full sm:w-2/5 flex justify-center items-center sm:justify-end'>
                        <div className=' max-w-sm sm:w-72 px-4'>
                            <Reveal direction="left">
                            <img src={phone} />
                            </Reveal>
                        </div>
                    </div>

                    <div className='flex flex-col sm:w-3/5 mx-8' >
                        <Reveal>
                        <h1 className='hidden sm:block text-7xl text-left font-light mb-4'>Plant Pulse App</h1>
                        </Reveal>
                        <div className='flex flex-col sm:pr-8 mt-8 sm:mt-0'>
                            <Reveal>
                            <p className='text-left mb-4 max-w-lg sm:text-lg' >
                                <strong>Automated Plant Care:</strong> Enjoy hassle-free plant care with automated watering and environmental adjustments. Our app takes the guesswork out of plant maintenance, ensuring your plants receive the perfect amount of moisture and light
                            </p>
                            </Reveal>
                            <Reveal>
                            <p className='text-left mb-4 max-w-lg sm:text-lg' >
                                <strong>Real-time Monitoring:</strong>  Stay connected to your plants' well-being through real-time data. Access live updates on light, temperature, and soil moisture, allowing you to respond promptly to your plants' needs.
                            </p>
                            </Reveal>
                            <Reveal>
                            <p className='text-left max-w-lg sm:text-lg' >
                                <strong>Eco-Friendly Practices:</strong>  We're committed to sustainability. Our app encourages responsible water use and energy efficiency, minimizing environmental impact while keeping your indoor garden healthy.
                            </p>
                            </Reveal>
                        </div>
                        <div className='flex flex-col md:flex-row mt-8 w-full items-center'>
                            <Reveal>
                            <img src={app_apple} alt="Apple App Store" className=' w-72 md:w-48 md:mr-4 cursor-pointer transform transition-transform hover:scale-105 hover:brightness-110' />
                            </Reveal>
                            <Reveal>
                            <img src={app_store} alt="Google Play Store" className=' w-72 md:w-48 mt-8 md:mt-0 cursor-pointer transform transition-transform hover:scale-105 hover:brightness-110' />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlantPulseApp;