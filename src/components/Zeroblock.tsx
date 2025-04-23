import { useTranslation } from 'react-i18next'

const Zeroblock = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
    const currentLang = i18n.resolvedLanguage || i18n.language;

    return (
        <div className='w-full p-[20px]'
            style={{
                backgroundImage: `url('/img/zbg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}
        >
            <div className='w-full flex justify-end items-center'>
                <div className="flex w-max gap-2 items-center text-white">
                    <button
                        onClick={() => changeLanguage('ru')}
                        className={`cursor-pointer p-2 rounded transition-colors duration-200 focus:outline-none ${currentLang === 'ru'
                                ? 'text-[#F1C86F]' 
                                : 'text-white hover:text-[#F1C86F]'
                            }`}
                    >
                        RU
                    </button>
                    <span className="text-white">|</span>
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`cursor-pointer p-2 rounded transition-colors duration-200 focus:outline-none ${currentLang === 'en'
                                ? 'text-[#F1C86F]' 
                                : 'text-white hover:text-[#F1C86F]'
                            }`}
                    >
                        EN
                    </button>
                </div>
            </div>

            <div className='flex w-full flex-col items-center'>
                <h1 data-aos="zoom-in" className='mt-[50px] text-[#F1C86F] max-w-[300px] text-center fontb text-[25px] uppercase'>{t('z_title')}</h1>
                <p data-aos-delay="300" data-aos="zoom-out-up" className='whitespace-pre-line max-w-[260px] text-[18px] text-center text-white -bold mt-[20px]'>{t('z_subtitle')}</p>
            </div>



            <div data-aos="fade-up"
                data-aos-duration="1000" className='mt-[300px] relative bg-[#88806E] mb-[20px] p-[20px]'>
                <div className='absolute w-[15px] h-[15px] bg-[#323608] rounded-full top-[10px] left-[10px]'></div>
                <p className='whitespace-pre-line text-center text-white fonth '>
                  {t("z_info")}
                </p>
            </div>
        </div>
    )
}

export default Zeroblock











// <div className="p-4">
// <h1 className="text-2xl font-bold">{t('welcome')}</h1>
// <div className="mt-4 flex gap-2">
//     <button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-blue-500 text-white rounded">
//         EN
//     </button>
//     <button onClick={() => changeLanguage('ru')} className="px-4 py-2 bg-green-500 text-white rounded">
//         RU
//     </button>
// </div>
// </div>