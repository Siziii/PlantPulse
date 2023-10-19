import { useState } from "react";
const Contact = () => {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };
    const rows = message.split('\n').length;

    return (
        <div className="sm:my-8 px-4 py-8 sm:p-4 bg-dark-secondary sm:rounded-lg">
            <h1 className='text-4xl sm:text-5xl font-light mb-4 sm:mt-21 mt-0'>Get in touch</h1>

            <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row ">
                    <div className="flex flex-col w-full sm:w-1/2 sm:mr-1">
                        <span className="font-bold text-sm mb-1 text-white50">Name</span>
                        <input
                            className="px-6 mb-2 h-12 rounded-md bg-dark-primary outline-none border-none"
                            type="text"
                            placeholder="John"
                        />
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2 sm:ml-1">
                        <span className="font-bold text-sm mb-1 text-white50">Surname</span>
                        <input
                            className="px-6 mb-2 h-12 rounded-md bg-dark-primary outline-none border-none"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full ">
                    <span className="font-bold text-sm mb-1 text-white50">Email</span>
                    <input
                        className="mb-2 h-12 px-6  rounded-md bg-dark-primary outline-none border-none"
                        type="text"
                        placeholder="example@gmail.com"
                    />
                </div>
                <div className="flex flex-col w-full ">
                    <span className="font-bold text-sm mb-1 text-white50">Message</span>
                    <textarea
                        className="px-6 py-3 min-h-[3rem] h-fit rounded-md bg-dark-primary outline-none border-none resize-none"
                        type="text "
                        placeholder="Your message..."
                        value={message}
                        onChange={handleInputChange}
                        rows={rows}
                    />
                </div>
                <button className="flex w-full items-center justify-center bg-dark-primary h-12 rounded-lg mt-8 hover:brightness-110">
                    Send Message
                </button>
            </div>
        </div>
    );
}

export default Contact;