import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";


interface FormData {
    checkInDate: string;
    checkOutDate: string;
    fullName: string;
    passportNumber: string;
    allergies: string;
    chronicConditions: string;
    desiredProcedures: string[];
    referralSource: string;
    otherReferral: string;
    comments: string;
}

interface Errors {
    checkInDate?: string;
    checkOutDate?: string;
    fullName?: string;
    passportNumber?: string;
}

interface ProcedureCategory {
    name: string;
    procedures: string[];
}

const Form: React.FC = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        checkInDate: "",
        checkOutDate: "",
        fullName: "",
        passportNumber: "",
        allergies: "",
        chronicConditions: "",
        desiredProcedures: [],
        referralSource: "",
        otherReferral: "",
        comments: "",
    });
    const [errors, setErrors] = useState<Errors>({});
    const [showModal, setShowModal] = useState<boolean>(false);
    const [openCategories, setOpenCategories] = useState<string[]>([]);

    const [utm, setUtm] = useState<Record<string, string>>({});
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const utmParams: Record<string, string> = {};
        ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
            const value = params.get(key);
            if (value) {
                utmParams[key] = value;
            }
        });
        setUtm(utmParams);
    }, []);

    const checkInRef = useRef<HTMLInputElement>(null);
    const checkOutRef = useRef<HTMLInputElement>(null);
    const fullNameRef = useRef<HTMLInputElement>(null);
    const passportRef = useRef<HTMLInputElement>(null);


    const referralSources: string[] = Object.values(t("Form.referralSources", { returnObjects: true }));

    const procedureCategories: ProcedureCategory[] = Object.values(
        t("Form.procedureCategories", { returnObjects: true })
    ).map((category: any) => ({
        name: category.name,
        procedures: Object.values(category.procedures),
    }));

    const toggleCategory = (category: string) => {
        setOpenCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const handleProcedureChange = (procedure: string) => {
        setFormData((prev) => ({
            ...prev,
            desiredProcedures: prev.desiredProcedures.includes(procedure)
                ? prev.desiredProcedures.filter((p) => p !== procedure)
                : [...prev.desiredProcedures, procedure],
        }));
    };

    const clearError = (field: keyof Errors) => {
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
            ...(name === "referralSource" && value !== referralSources[4] ? { otherReferral: "" } : {}),
        }));
        if (["checkInDate", "checkOutDate", "fullName", "passportNumber"].includes(name)) {
            clearError(name as keyof Errors);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Errors = {};

        if (!formData.checkInDate) newErrors.checkInDate = t("Form.checkInDateError");
        if (!formData.checkOutDate) newErrors.checkOutDate = t("Form.checkOutDateError");
        if (!formData.fullName.trim()) newErrors.fullName = t("Form.fullNameError");
        if (!formData.passportNumber.trim()) newErrors.passportNumber = t("Form.passportNumberError");

        setErrors(newErrors);


        if (Object.keys(newErrors).length > 0) {
            const firstErrorField = Object.keys(newErrors)[0];
            switch (firstErrorField) {
                case "checkInDate":
                    checkInRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    checkInRef.current?.focus();
                    break;
                case "checkOutDate":
                    checkOutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    checkOutRef.current?.focus();
                    break;
                case "fullName":
                    fullNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    fullNameRef.current?.focus();
                    break;
                case "passportNumber":
                    passportRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
                    passportRef.current?.focus();
                    break;
            }
            return;
        }



        if (Object.keys(newErrors).length === 0) {
            const dataToSend = {
                ...formData,
                utm_source: utm.utm_source || "",
                // utm_medium: utm.utm_medium || "",
                // utm_campaign: utm.utm_campaign || "",
                // utm_term: utm.utm_term || "",
                // utm_content: utm.utm_content || "",
            };

            console.log("Данные с UTM для отправки:", dataToSend);
            setShowModal(true);
            setFormData({
                checkInDate: "",
                checkOutDate: "",
                fullName: "",
                passportNumber: "",
                allergies: "",
                chronicConditions: "",
                desiredProcedures: [],
                referralSource: "",
                otherReferral: "",
                comments: "",
            });
        }
    };

    return (
        <>
            <div data-aos="zoom-in-down" className="w-full flex flex-col items-center">
                <form onSubmit={handleSubmit} className="p-8 w-[100%] bg-[#8E9581]">
                    <p className="text-center fabl text-[25px] fontb text-white uppercase mb-6">
                        {t("Form.title")}
                    </p>


                    <label className="text-white fonth text-sm mb-1 block">
                        {t("Form.checkInDate")} <span className="text-[#910000]">*</span>
                    </label>
                    <input
                        type="date"
                        name="checkInDate"
                        ref={checkInRef}
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        className={`w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border ${errors.checkInDate ? "border-[#910000]" : "border-white"
                            } focus:outline-none focus:ring-2 focus:ring-[#F1C86F]`}
                    />
                    {errors.checkInDate && (
                        <p className="text-[#910000] text-sm mt-[-10px] mb-2">{errors.checkInDate}</p>
                    )}


                    <label className="text-white mt-3 fonth text-sm mb-1 block">
                        {t("Form.checkOutDate")} <span className="text-[#910000]">*</span>
                    </label>
                    <input
                        type="date"
                        name="checkOutDate"
                        ref={checkOutRef}
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        className={`w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border ${errors.checkOutDate ? "border-[#910000]" : "border-white"
                            } focus:outline-none focus:ring-2 focus:ring-[#F1C86F]`}
                    />
                    {errors.checkOutDate && (
                        <p className="text-[#910000] text-sm mt-[-10px] mb-2">{errors.checkOutDate}</p>
                    )}

                    {/* ФИО */}
                    <label className="text-white fonth mt-3 text-sm mb-1 block">
                        {t("Form.fullName")} <span className="text-[#910000]">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        ref={fullNameRef}
                        placeholder={t("Form.fullNamePlaceholder")}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border ${errors.fullName ? "border-[#910000]" : "border-white"
                            } focus:outline-none focus:ring-2 focus:ring-[#F1C86F]`}
                    />
                    {errors.fullName && (
                        <p className="text-[#910000] text-sm mt-[-10px] mb-2">{errors.fullName}</p>
                    )}

                    {/* Номер паспорта */}
                    <label className="text-white fonth mt-3 text-sm mb-1 block">
                        {t("Form.passportNumber")} <span className="text-[#910000]">*</span>
                    </label>
                    <input
                        type="text"
                        name="passportNumber"
                        ref={passportRef}
                        placeholder={t("Form.passportNumberPlaceholder")}
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        className={`w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border ${errors.passportNumber ? "border-[#910000]" : "border-white"
                            } focus:outline-none focus:ring-2 focus:ring-[#F1C86F]`}
                    />
                    {errors.passportNumber && (
                        <p className="text-[#910000] text-sm mt-[-10px] mb-2">{errors.passportNumber}</p>
                    )}

                    {/* Аллергии */}
                    <label className="text-white fonth mt-3 text-sm mb-1 block">
                        {t("Form.allergies")}
                    </label>
                    <input
                        type="text"
                        name="allergies"
                        placeholder={t("Form.allergiesPlaceholder")}
                        value={formData.allergies}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#F1C86F]"
                    />

                    {/* Хронические заболевания */}
                    <label className="text-white fonth mt-3 text-sm mb-1 block">
                        {t("Form.chronicConditions")}
                    </label>
                    <input
                        type="text"
                        name="chronicConditions"
                        placeholder={t("Form.chronicConditionsPlaceholder")}
                        value={formData.chronicConditions}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#F1C86F]"
                    />

                    {/* Желаемые процедуры (Accordion) */}
                    <label className="text-white fonth mt-6 text-sm mb-1 block">
                        {t("Form.desiredProcedures")}
                    </label>
                    <div className="mb-2">
                        {procedureCategories.map((category) => (
                            <div key={category.name} className="border-b border-white/50">
                                <button
                                    type="button"
                                    onClick={() => toggleCategory(category.name)}
                                    className="w-full py-2 text-left text-white fontb text-sm uppercase flex justify-between items-center"
                                >
                                    {category.name}
                                    <span>{openCategories.includes(category.name) ? "−" : "+"}</span>
                                </button>
                                {openCategories.includes(category.name) && (
                                    <div className="pl-4 py-2">
                                        {category.procedures.map((procedure) => (
                                            <label
                                                key={procedure}
                                                className="flex items-center space-x-2 cursor-pointer mb-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.desiredProcedures.includes(procedure)}
                                                    onChange={() => handleProcedureChange(procedure)}
                                                    className="w-[15px] min-w-[15px] h-[15px] accent-[#F1C86F] bg-transparent border border-white rounded"
                                                />
                                                <span className="text-white text-sm">{procedure}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Откуда о нас узнали */}
                    <label className="text-white mt-6 fonth text-sm mb-1 block">
                        {t("Form.referralSource")}
                    </label>
                    <select
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-2 bg-transparent text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#F1C86F]"
                    >
                        <option value="" disabled className="bg-gray-800">
                            {t("Form.referralSourcePlaceholder")}
                        </option>
                        {referralSources.map((source) => (
                            <option key={source} value={source} className="bg-gray-800">
                                {source}
                            </option>
                        ))}
                    </select>

                    {/* Поле "Другое" */}
                    {formData.referralSource === referralSources[4] && (
                        <>
                            <label className="text-white  fonth text-sm mb-1 block">
                                {t("Form.otherReferral")}
                            </label>
                            <input
                                type="text"
                                name="otherReferral"
                                placeholder={t("Form.otherReferralPlaceholder")}
                                value={formData.otherReferral}
                                onChange={handleInputChange}
                                className="w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#F1C86F]"
                            />
                        </>
                    )}

                    {/* Комментарий */}
                    <label className="text-white fonth mt-3 text-sm mb-1 block">
                        {t("Form.comments")}
                    </label>
                    <textarea
                        name="comments"
                        placeholder={t("Form.commentsPlaceholder")}
                        value={formData.comments}
                        onChange={handleInputChange}
                        className="w-full p-2 mb-2 bg-transparent placeholder-white/70 text-white border border-white focus:outline-none focus:ring-2 focus:ring-[#F1C86F]"
                        rows={4}
                    />

                    {/* Кнопка отправки */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-[#F1C86F] text-black fontb uppercase cursor-pointer hover:bg-[#cbaa64] transition-all"
                    >
                        {t("Form.submt")}
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
                                <p className="text-[25px] fabl">{t("Form.thank")}</p>
                                <p className="fonth fabl mt-[10px]">{t("Form.soon")}</p>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Form;