import planter02 from '../assets/planter02.png'
import planter03 from '../assets/planter03.png'
import planter04 from '../assets/planter04.png'
import { useCart } from '../CartContext';
import CartItem from './cart-components/CartItem';
import CartTotal from './cart-components/CartTotal';
import CartVisible from './cart-components/CartVisible';

const Cart = ({ isCartVisible, setIsCartVisible }) => {
    const { addToCart, removeFromCart, getVariationCount, getTotalPrice, getTotalItems, getTotalItemsPrice } = useCart();    
    const variantData = [
        {
            title: "Concrete variation",
            variation: "Concrete",
            imageSrc: planter02,
            price: 34.99,
        },
        {
            title: "White variation",
            variation: "White",
            imageSrc: planter03,
            price: 29.99,
        },
        {
            title: "Brown variation",
            variation: "Brown",
            imageSrc: planter04,
            price: 24.99,
        },
    ];

    const handleAddToCart = (variant) => {
        const price = variantPrices[variant];
        addToCart(variant, price);
    };
    const handleRemoveFromCart = (variant) => {
        removeFromCart(variant)
    };

    return (
        <div className={` ${isCartVisible ? 'visible' : 'hidden'}`}>
            <div className='bg-dark-tertiary h-screen sm:h-auto'>
                <div className='flex flex-col sm:pt-4'>

                    {/* Map variation data to cart items*/}
                    {variantData.map((variation, index) => (
                        <CartItem
                            key={index}
                            imageSrc={variation.imageSrc}
                            onAddToCart={() => handleAddToCart(variation.variation)}
                            onRemoveFromCart={() => handleRemoveFromCart(variation.variation)}
                            title={variation.title}
                            variation={variation.variation}
                            count={getVariationCount(variation.variation)}
                            total={getTotalItemsPrice(variation.variation)}
                        />
                    ))}

                    <CartTotal
                        totalItems={getTotalItems()}
                        totalPrice={getTotalPrice()}
                    />

                    {/* Close handle */}
                    <CartVisible isCartVisible={isCartVisible} setIsCartVisible={setIsCartVisible} />
                </div>
            </div>
        </div>
    );
};

export default Cart;