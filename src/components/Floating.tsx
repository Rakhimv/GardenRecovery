import { useState } from 'react';
import { FaWhatsapp, FaTelegram, FaComments } from 'react-icons/fa';

const Floating = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {open && (
                <>
                    <a
                        href="https://t.me/+381629353405"
                        target="_blank"
                        className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
                    >
                        <FaTelegram className="text-white text-xl" />
                    </a>
                    <a
                        href="https://wa.me/+381629353405"
                        target="_blank"
                        className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
                    >
                        <FaWhatsapp className="text-white text-xl" />
                    </a>
                </>
            )}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="bg-[#F1C86F] cursor-pointer p-4 rounded-full shadow-lg hover:bg-white transition"
            >
                <FaComments className="text-black text-xl" />
            </button>
        </div>
    );
};

export default Floating;
