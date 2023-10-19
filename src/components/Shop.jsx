import { useState } from "react";
import planter02 from '../assets/planter02.png'
import planter03 from '../assets/planter03.png'
import planter04 from '../assets/planter04.png'

import SelectVariantButton from "./SelectVariantButton";
import Reveal from "./utils/Reveal";
import { useCart } from '../CartContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
    const { addToCart } = useCart();
    const [productImage, setProductImage] = useState(planter02)
    const [selectedVariant, setSelectedVariant] = useState('Concrete');

    const variantPrices = {
        Concrete: 34.99,
        White: 29.99,
        Brown: 24.99,
    };
    // Function to handle variant selection
    const handleVariantSelect = (variant, variantName) => {
        setProductImage(variant);
        setSelectedVariant(variantName);
    }
    const handleAddToCart = (variant) => {
        const price = variantPrices[variant];
        addToCart(variant, price);
        notify(variant);
    };
    const notify = (variant) => {
        toast(`${variant} variation added to cart!`);
    }
    return (
        <div className="bg-dark-primary " id="shop">
            <div className='w-fit mx-auto '>
                <div className="flex flex-col sm:flex-row">

                    <div className='hidden w-2/5 sm:flex justify-center items-center sm:justify-end'>
                        <div className='md:w-96'>
                            <Reveal direction="left">
                                <img src={productImage} className='max-w-full h-auto' />
                            </Reveal>
                        </div>
                    </div>

                    <div className='px-8 w-full sm:w-3/5 sm:py-12 flex flex-col'>

                        <Reveal>
                            <h1 className='text-5xl sm:text-7xl font-light mb-4 mt-8 sm:mt-0'>Smart Planter</h1>
                        </Reveal>
                        <Reveal>
                            <span className='font-bold text-xl mb-4'>{selectedVariant} finish</span>
                        </Reveal>
                        <Reveal>
                            <p className='text-left mb-4 max-w-lg sm:text-lg'>
                                Our innovative smart planter combines cutting-edge technology with a sleek design to elevate your indoor gardening experience. Choose from three stunning color variants to match your style: Concrete, White, or Brown.
                            </p>
                        </Reveal>
                        <Reveal>
                            <div className="flex items-center">
                                <span className="text-xl mr-2">Price:</span>
                                <span className="text-4xl font-bold mr-1">{variantPrices[selectedVariant]}</span>
                                <span className="text-xl">€</span>
                            </div>
                        </Reveal>

                        <div className="w-full flex justify-center sm:justify-start mt-8 ">
                            <Reveal>
                                <div className="w-full sm:w-72 flex justify-between">
                                    <SelectVariantButton
                                        onClick={handleVariantSelect}
                                        image={planter03}
                                        selected={selectedVariant === 'White'}
                                        variant="White"
                                    />
                                    <SelectVariantButton
                                        onClick={handleVariantSelect}
                                        image={planter02}
                                        selected={selectedVariant === 'Concrete'}
                                        variant="Concrete"
                                    />
                                    <SelectVariantButton
                                        onClick={handleVariantSelect}
                                        image={planter04}
                                        selected={selectedVariant === 'Brown'}
                                        variant="Brown"
                                    />
                                </div>
                            </Reveal>
                        </div>

                        <div className='flex justify-center sm:justify-start py-8'>
                            <Reveal>
                                <button className='px-20 py-4 rounded-full bg-secondary transform transition-transform hover:scale-105 hover:brightness-110' onClick={() => handleAddToCart(selectedVariant)}>
                                    Add to cart
                                </button>
                            </Reveal>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;