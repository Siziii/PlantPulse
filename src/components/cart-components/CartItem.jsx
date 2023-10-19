const CartItem = ({ imageSrc, onAddToCart, onRemoveFromCart, title, count, total }) => {
    return (
        <div className="sm:mx-auto">
            <div className='flex flex-col sm:mb-4 sm:px-4 sm:w-[36rem] md:w-[48rem]'>
                <div className="flex  bg-dark-secondary sm:rounded-lg px-4 pt-6 sm:p-2">
                    <div className="w-20 bg-dark-primary rounded-lg flex justify-center items-center mr-2">
                        <img src={imageSrc} alt="planter" className="w-full"/>
                    </div>
                    <div className="flex flex-col justify-between mr-2">
                        <div className='h-12 w-12  mb-2 bg-dark-primary rounded-lg hover:brightness-110 transition-all'>
                            <button className='w-full h-full' onClick={onAddToCart}>
                                +
                            </button>
                        </div>
                        <div className='h-12 w-12  bg-dark-primary rounded-lg hover:brightness-110 transition-all'>
                            <button className='w-full h-full' onClick={onRemoveFromCart}>
                                -
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between w-full">
                        <div className="bg-dark-primary rounded-lg h-full mb-2 flex justify-center items-center">
                            <h1 className='sm:text-xl'>{title}</h1>
                        </div>
                        <div className='flex justify-between h-full' >
                            <div className="bg-dark-primary rounded-lg w-full mr-2 flex flex-col px-2 justify-center items-center">
                                <span className=' font-bold sm:mr-2'>Count:</span>
                                <span className=' sm:text-xl'>{count}</span>
                            </div>
                            <div className="bg-dark-primary rounded-lg w-full flex flex-col px-2 justify-center items-center">
                                <span className=' font-bold mr-2'>Total: </span>
                                <div className='flex'>
                                    <span className='sm:text-xl'>{total}</span>
                                    <span className='text-sm'>€</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
