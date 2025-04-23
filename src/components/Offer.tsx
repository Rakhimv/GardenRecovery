import { useTranslation } from "react-i18next"

const Offer = () => {
      const { t } = useTranslation()


    return (
        <div className="p-[20px]">
            <h2 className="text-white text-[25px] fontb text-center uppercase">{t("of_title")}</h2>
            <div className="flex flex-col text-white w-full items-center mt-[10px]">
                <p className="whitespace-pre-line text-center max-w-[300px] fonth font-thin ">{t("of_item1")}</p>

                <div className="mt-[40px]">
                    <svg width="80" height="146" viewBox="0 0 162 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_0_41)">
                            <path d="M135.875 146H103.537C102.374 146 101.431 145.055 101.431 143.89V90.0514H60.5713V143.89C60.5713 145.055 59.6276 146 58.4648 146H26.1274C21.6108 146 17.9359 142.318 17.9359 137.793V72.3107C17.9359 71.6252 18.2684 70.9801 18.8297 70.5853L79.7892 27.5248C80.5176 27.0106 81.4901 27.0106 82.2166 27.5248L143.176 70.5853C143.735 70.9801 144.07 71.6252 144.07 72.3107V137.793C144.07 142.318 140.395 146 135.878 146H135.875ZM105.644 141.779H135.875C138.067 141.779 139.853 139.99 139.853 137.793V73.4063L81 31.8343L22.147 73.4063V137.793C22.147 139.99 23.9325 141.779 26.1255 141.779H56.3564V87.9409C56.3564 86.7759 57.3001 85.8304 58.4628 85.8304H103.535C104.698 85.8304 105.642 86.7759 105.642 87.9409V141.779H105.644Z" fill="white" />
                            <path d="M80.9996 4.22094C82.0779 4.22094 83.1138 4.55022 83.996 5.1722L155.58 55.7369C157.923 57.3929 158.486 60.6491 156.833 62.9984C155.861 64.381 154.268 65.207 152.574 65.207C151.502 65.207 150.468 64.8778 149.586 64.2539L83.4271 17.5231C82.6987 17.0089 81.8492 16.7509 80.9996 16.7509C80.1501 16.7509 79.2987 17.0089 78.5722 17.5231L12.4118 64.2558C11.5296 64.8797 10.4956 65.209 9.42311 65.209C7.72985 65.209 6.13845 64.3829 5.16593 63.0003C4.36638 61.8623 4.05502 60.4816 4.29142 59.1106C4.52783 57.7395 5.28317 56.5418 6.41906 55.7407L78.0033 5.17412C78.8855 4.55215 79.9214 4.22287 80.9996 4.22287M80.9996 0.00192561C79.1007 0.00192561 77.2018 0.575758 75.5739 1.72535L3.98967 52.2881C-0.259829 55.2901 -1.27656 61.1748 1.71981 65.4323C3.55338 68.0377 6.46518 69.4299 9.42119 69.4299C11.2951 69.4299 13.1902 68.8696 14.8373 67.7065L80.9996 20.9738L147.16 67.7065C148.809 68.8715 150.702 69.4299 152.576 69.4299C155.534 69.4299 158.446 68.0377 160.279 65.4323C163.276 61.1748 162.259 55.2901 158.01 52.2881L86.4235 1.72342C84.7975 0.573833 82.8986 0 80.9977 0L80.9996 0.00192561Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_41">
                                <rect width="162" height="146" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>


                <h2 className="text-white text-[25px] fontb text-center uppercase">{t("of_title2")}</h2>


                <p className="text-center max-w-[300px] fonth font-thin mt-[15px] mb-[15px] ">{t("of_item2")}</p>


            </div>


            <div className="flex flex-col items-center">
                <h2 className="text-white text-[16px] fontb text-center uppercase">{t("of_title21")}</h2>

                <p className="text-center text-white max-w-[300px] fonth font-thin mb-[15px] ">
                    {t("of_item21")}
                </p>
                <div className="flex flex-col items-center gap-[20px] p-[20px] relative">
                    <img src="/img/e1_1.png" data-aos="flip-up" className="relative z-[2]" />
                    <div className="w-full overflow-hidden absolute top-1/2 translate-y-[-50%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 997 735" fill="none">
                            <rect x="1.5" y="1.5" width="994" height="732" stroke="#F1C86F" stroke-width="3" />
                        </svg>
                        <div className="absolute top-1/4 left-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                        <div className="absolute bottom-1/4 left-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                        <div className="absolute top-1/4 right-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                        <div className="absolute bottom-1/4 right-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                    </div>
                    <img src="/img/e1_2.png" data-aos="flip-up" className="relative z-[2]" />
                </div>
            </div>


            <div className="flex flex-col items-center mt-[20px]">
                <h2 className="text-white text-[16px] fontb text-center uppercase">{t("of_title3")}</h2>

                <p className="text-center text-white max-w-[300px] fonth font-thin mb-[15px] ">
                {t("of_item3")}
                </p>
                <div className="flex flex-col items-center gap-[20px] p-[20px] relative">
                    <img src="/img/e2_1.png" data-aos="flip-up" className="relative z-[2]" />
                    <div className="w-full overflow-hidden absolute top-1/2 translate-y-[-50%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 997 735" fill="none">
                            <rect x="1.5" y="1.5" width="994" height="732" stroke="#F1C86F" stroke-width="3" />
                        </svg>
                        <div className="absolute top-1/4 left-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                        <div className="absolute bottom-1/4 left-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                        <div className="absolute top-1/4 right-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                        <div className="absolute bottom-1/4 right-0 w-[5px] h-[20px] bg-[#88806E]"></div>
                    </div>
                    <img src="/img/e2_2.png" data-aos="flip-up" className="relative z-[2]" />
                </div>
            </div>
        </div>
    )
}

export default Offer