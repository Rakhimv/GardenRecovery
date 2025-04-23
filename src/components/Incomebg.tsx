import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Income = () => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState<any>('ru')
    useEffect(()=>{
        setCurrentLang(i18n.resolvedLanguage || i18n.language)
        document.title = t('z_title')
    },[i18n.resolvedLanguage, i18n.language])
    return (
        <div className='w-full p-[20px]'
            style={{
                backgroundImage: `url('/img/incomebg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}
        >
            <div data-aos="zoom-in" className='flex w-full flex-col items-center'>
                <p className='mt-[50px] text-[#F1C86F] max-w-[300px] text-center fontb text-[25px] uppercase'>{t('Income.title')}</p>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[20px]'>{t('Income.intro')}</p>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[15px]'>
                    <span className="font-bold">{t('Income.businessGrowth.header')}</span>
                </p>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[20px]'>{t('Income.businessGrowth.items.first')}</p>

                <div className="w-[100px] h-[1px] bg-[#ffffff40] mt-[20px]"></div>

                <p className='text-[15px] max-w-[350px] text-center text-white fonth mt-[15px]'>{t('Income.businessGrowth.items.second')}</p>
                <div className="w-[100px] h-[1px] bg-[#ffffff40] mt-[20px]"></div>
                <p className='text-[15px] max-w-[350px] text-center text-white fonth mt-[15px]'>{t('Income.businessGrowth.items.third')}</p>

                {currentLang === 'en' &&
                    <>
                        <div className="w-[100px]  h-[1px] bg-[#ffffff40] mt-[20px]"></div>
                        <p className='text-[15px] max-w-[350px] text-center text-white fonth mt-[15px]'>There’s free adjacent land for development (e.g., a banya, restaurant, or 2 more houses)</p>
                    </>


                }
                {currentLang === 'ru' ?
                    <div data-aos="flip-left" className="p-[20px] w-full">
                        <div className="w-full p-[20px] bg-[#00000070] mt-[400px]">
                            <p className='text-[15px] text-center text-white fonth mt-[20px]'>
                                {t('Income.additionalLand')}
                            </p>
                        </div>
                    </div> :
                    <div className='mt-[600px]'></div>
                }
            </div>
        </div>
    );
}

export default Income;
