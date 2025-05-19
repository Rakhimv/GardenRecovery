import { Trans, useTranslation } from 'react-i18next'

const Box1 = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
    const currentLang = i18n.resolvedLanguage || i18n.language;

    return (
        <>
            <div className='w-full p-[20px] flex flex-col items-center'>
                <div className='w-full flex justify-end items-center'>
                    <div className="flex w-max gap-2 items-center text-[#8E9581]">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`cursor-pointer p-2 rounded transition-colors duration-200 focus:outline-none ${currentLang === 'en'
                                ? 'text-[#8E9581] text-[20px] font-bold!'
                                : 'text-[#8E9581] opacity-80 hover:text-[#8E9581]'
                                }`}
                        >
                            EN
                        </button>
                        <span className="text-sys text-[#8E9581]">|</span>
                        <button
                            onClick={() => changeLanguage('rs')}
                            className={`cursor-pointer p-2 rounded transition-colors duration-200 focus:outline-none ${currentLang === 'rs'
                                ? 'text-[#8E9581] text-[20px] font-bold!'
                                : 'text-[#8E9581] opacity-80 hover:text-[#8E9581]'
                                }`}
                        >
                            RS
                        </button>
                        <span className="text-sys text-[#8E9581]">|</span>
                        <button
                            onClick={() => changeLanguage('ru')}
                            className={`cursor-pointer p-2 rounded transition-colors duration-200 focus:outline-none ${currentLang === 'ru'
                                ? 'text-[#8E9581] text-[20px] font-bold!'
                                : 'text-[#8E9581] opacity-80 hover:text-[#8E9581]'
                                }`}
                        >
                            RU
                        </button>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    className='flex  flex-col w-full p-[7%] pb-[0px]'>

                    <div className='flex w-full justify-center items-center'>
                        <img src='/img/title.svg' />
                    </div>

                    <div className='flex w-full mt-[20px] justify-center items-center'>
                        <div className='w-[90%] h-[1px] bgsys'></div>
                    </div>

                </div>



                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className='flex w-full flex-col items-center'>
                    <h1 className="mt-[10px] textsys max-w-[400px] text-center text-[15px]">
                        {t('z_title')}
                    </h1>

                    <div className='w-[100px] mt-[15px] h-[1px] bgsys'></div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className='flex w-full mt-[15px] flex-col items-center'>
                    <p className="mt-[10px] textsys max-w-[450px] text-center text-[15px]">
                        {t('z_title2')}
                    </p>

                    <div className='w-[100px] mt-[15px] h-[1px] bgsys'></div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className='flex w-full mt-[15px] flex-col items-center'>
                    <p className="mt-[10px] textsys max-w-[450px] text-center text-[15px]">
                        {t('z_title3')}
                    </p>

                    <div className='w-[100px] mt-[15px] h-[1px] bgsys'></div>
                </div>

                <p
                    data-aos-delay="250"
                    data-aos="fade-up"
                    className="mt-[10px] textsys max-w-[500px] text-center text-[15px]">
                    {t('z_title4.title')}
                </p>


                <p
                    data-aos-delay="300"
                    data-aos="fade-up"
                    className="whitespace-pre-line textsys max-w-[300px] text-[15px] text-center text-[#f0ebe6] fonth mt-[20px] font-normal!">
                    <Trans
                        i18nKey="z_title4.sub"
                        components={{ strong: <strong className="font-bold!" /> }}
                    />
                </p>







            </div>
            <img
                data-aos-delay="400"
                data-aos="zoom-in"
                src='/img/0.png' className='w-full' />
        </>
    )
}

export default Box1











// <div className="p-4">
// <h1 className="text-2xl font-bold">{t('welcome')}</h1>
// <div className="mt-4 flex gap-2">
//     <button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-blue-500 text-[#f0ebe6] rounded">
//         EN
//     </button>
//     <button onClick={() => changeLanguage('ru')} className="px-4 py-2 bg-green-500 text-[#f0ebe6] rounded">
//         RU
//     </button>
// </div>
// </div>