const CartTotal = ({ totalItems, totalPrice }) => {
    return (
        <div className="sm:mx-auto"> 
            <div className='flex flex-col sm:px-4 sm:w-[36rem] md:w-[48rem]'>
                <div className="flex flex-col bg-dark-secondary sm:rounded-lg p-2">
                    <div className="flex justify-between mb-2">
                        <div className="bg-dark-primary rounded-lg w-full flex items-center justify-center h-12 mr-2">
                            <span className=' font-bold mr-2'>Total items: </span>
                            <span className='sm:text-xl'>{totalItems}</span>
                        </div>
                        <div className="bg-dark-primary rounded-lg w-full flex items-center justify-center h-12">
                            <span className=' font-bold mr-2'>Total: </span>
                            <div className='flex'>
                                <span className='sm:text-xl'>{totalPrice}</span>
                                <span className='text-sm'>€</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-dark-primary rounded-lg hover:brightness-110 transition-all  h-12">
                        <button className="w-full h-full ">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default CartTotal;