import { useState, FormEvent, ChangeEvent } from "react";
import PhoneInput from "react-phone-number-input/input";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface Errors {
    name?: string;
    phone?: string;
    messenger?: string;
}

const Form: React.FC = () => {
    const { t } = useTranslation();

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>();
    const [messenger, setMessenger] = useState<"whatsapp" | "telegram" | "">("");
    const [errors, setErrors] = useState<Errors>({});
    const [showModal, setShowModal] = useState<boolean>(false);

    const clearError = (field: keyof Errors) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Errors = {};

        if (!name.trim()) newErrors.name = t('Form.nameError');
        if (!phone) newErrors.phone = t('Form.phoneError');
        if (!messenger) newErrors.messenger = t('Form.messengerError');

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("phone", phone || "---");
            formData.append("messenger", messenger);

            await fetch('./send.php', {
                method: 'POST',
                body: formData,
            });

            setShowModal(true);
            setName("");
            setPhone("");
            setMessenger("");
        }
    };

    return (
        <>
            <div data-aos="zoom-in-down" className="w-full flex flex-col items-center mt-12 mb-6">
                <form onSubmit={handleSubmit} className="p-8 w-full max-w-xs bg-white/20">
                    <p className="text-center text-[25px] fontb text-white uppercase mb-6">
                        {t('Form.contactUs')}
                    </p>

                    <input
                        type="text"
                        placeholder={t('Form.namePlaceholder')}
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setName(e.target.value);
                            clearError("name");
                        }}
                        className={`w-full p-2 mb-2  bg-transparent placeholder-white/70 text-white border ${errors.name ? "border-red-500" : "border-white"
                            } focus:outline-none focus:ring-2 focus:ring-[#F1C86F]`}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-[-10px] mb-2">{errors.name}</p>
                    )}

                    <PhoneInput
                        placeholder={t('Form.phonePlaceholder')}
                        value={phone}
                        onChange={(value) => {
                            setPhone(value);
                            clearError("phone");
                        }}
                        className={`w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border ${errors.phone ? "border-red-500" : "border-white"
                            } focus:outline-none focus:ring-2 focus:ring-[#F1C86F]`}
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-[-10px] mb-2">{errors.phone}</p>
                    )}

                    <div className="text-white fonth text-sm mt-2 mb-1">
                        {t('Form.preferredMessenger')}
                    </div>
                    <div className="flex gap-6 mb-2">
                        {(["whatsapp", "telegram"] as const).map((m) => (
                            <label key={m} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="messenger"
                                    value={m}
                                    checked={messenger === m}
                                    onChange={() => {
                                        setMessenger(m);
                                        clearError("messenger");
                                    }}
                                    className="h-6 w-6 accent-[#F1C86F] bg-transparent border border-white rounded-full"
                                />
                                <span className="text-white capitalize">
                                    {m === "whatsapp" ? "WhatsApp" : "Telegram"}
                                </span>
                            </label>
                        ))}
                    </div>
                    {errors.messenger && (
                        <p className="text-red-500 text-sm mt-[-10px] mb-2">{errors.messenger}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-[#F1C86F] text-black fontb uppercase cursor-pointer hover:bg-[#cbaa64] transition-all"
                    >
                        {t('Form.submit')}
                    </button>
                </form>
            </div>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 bg-opacity-60 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 relative max-w-sm w-full text-center"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-[0px] right-3 text-gray-500 cursor-pointer hover:text-gray-800 text-[30px]"
                            >
                                ×
                            </button>
                            <p className="text-gray-800 text-[17px] font-medium fontb uppercase">
                                <p className="text-[25px]">{t('Form.thankYou')}</p>
                                <p className="fonth mt-[10px]">{t('Form.contactSoon')}</p>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Form;
