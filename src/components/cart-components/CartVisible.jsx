import { BsArrowUpShort } from "react-icons/bs";

const CartVisible = ({isCartVisible, setIsCartVisible}) => {
    return ( 
        <div className="flex h-full items-end justify-center py-2">
            <div
                className="w-8 h-8 flex justify-center cursor-pointer items-center hover:animate-ping" 
                onClick={()=>setIsCartVisible(!isCartVisible)}>
                <BsArrowUpShort size={30}/>
            </div>
        </div>
    );
}
 
export default CartVisible;