import { BiSolidNews } from 'react-icons/bi';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Newsletter = () => {
    const handleNewsletter = () => {
        const emailInput = document.getElementById("email-input");
        const email = emailInput.value;
        if (email) {
            toast(`Thank you for subscribing to our newsletter! Check your email at ${email} for the latest updates.`);
        } else {
            toast("Please enter your email first!");
        }
    };

    return (
        <div className="focus-within:brightness-110">
            <div className="h-12 w-full rounded-lg bg-dark-primary flex">
                <input
                    id="email-input"
                    className="w-3/5 h-full px-8 bg-transparent outline-none border-none"
                    type="text"
                    placeholder="Enter Your Email..."
                />
                
                <button
                    className={`w-2/5 h-full flex items-center justify-center bg-tertiary rounded-r-lg hover:bg-primary transition-all`}
                    onClick={handleNewsletter}
                >
                    <div className='flex items-center ml-2'>
                        <BiSolidNews size={24} />
                        <span className='ml-2'>Get News</span>
                    </div>
                </button>
                
            </div>
        </div>
    );
}

export default Newsletter;
