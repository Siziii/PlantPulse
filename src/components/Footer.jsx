import { BsEnvelopeAtFill, BsHouseFill, BsTelephoneFill } from "react-icons/bs";
import Contact from "./Contact";
import Newsletter from "./Newsletter";

const Footer = () => {

    return (
        <div className="bg-dark-tertiary">
            <div className="absolute -translate-y-16" id="contact"/>
            <div className='w-fit mx-auto '>
                <div className="flex flex-col sm:pb-8">
                    <Contact/>

                    <div className="flex flex-col lg:flex-row pb-4 bg-dark-secondary sm:rounded-lg px-4">

                        <div className="flex items-center justify-center mb-8 sm:my-4 lg:mb-0">
                            <Newsletter btnColor={'tertiary'}/>   
                        </div>

                        <div className="flex flex-col md:flex-row md:justify-center lg:mt-4">
                            <ul className='flex flex-col lg:ml-20 md:mr-20 min-w-fit'>
                                <h1 className="text-2xl pb-2 mb-2 font-light border-b-[3px] border-white20 ">Quick Links</h1>
                                <li className='pb-2 opacity-50 hover:opacity-100 transition-all'>
                                    <a href="#home">Home</a>
                                </li>
                                <li className='pb-2 opacity-50 hover:opacity-100 transition-all'>
                                    <a href="#about">About</a>
                                </li>
                                <li className='pb-2 opacity-50 hover:opacity-100 transition-all'>
                                    <a href="#shop">Shop</a>
                                </li>
                            </ul>
                            <ul className='flex flex-col'>
                                <h1 className="text-2xl pb-2 mb-2 font-light border-b-[3px] border-white20 " >Contact info</h1>
                                <li className='pb-2 flex items-center'>
                                    <BsHouseFill size={20} />
                                    <span className="ml-4 opacity-50 hover:opacity-100 transition-all">123 Main Street</span>
                                </li>
                                <li className='pb-2 flex items-center'>
                                    <BsTelephoneFill size={18} />
                                    <span className="ml-4 opacity-50 hover:opacity-100 transition-all">+1 (123) 456-7890</span>
                                </li>
                                <li className='pb-2 flex items-center'>
                                    <BsEnvelopeAtFill size={18} />
                                    <span className="ml-4 opacity-50 hover:opacity-100 transition-all">contact@plantpulse.com</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Footer;