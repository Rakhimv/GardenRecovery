import { Trans, useTranslation } from 'react-i18next'

const Box4 = () => {
    const { t } = useTranslation()

    return (
        <div
            className="w-full relative flex flex-col items-center p-[20px] pt-[0px]"
            style={{
                backgroundImage: `url('/img/bg4.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: "auto",
                width: '100%',
            }}
        >

            <p
                data-aos="fade-up"
                className="mt-[10px] fabl max-w-[450px] text-center text-[20px] text-[#f0ebe6]!">
                {t('box4.title')}
            </p>

            <p className="whitespace-pre-line textsys text-right text-[#f0ebe6]! w-full text-[10px] fonth mt-[40px] font-normal!">
                <Trans
                    i18nKey="box4.subtitle"
                    components={{ strong: <strong className="font-bold!" /> }}
                />
            </p>


            <div className='w-full mt-[80px] flex justify-between items-center'>
                <div data-aos="zoom-in-right">
                    <h2 className='fabl text-[12px] mb-[10px]'>{t('box4.el1.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(6).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black!' key={index}>{t(`box4.el1.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>
                <img data-aos="flip-right" src='/img/41.png' className='w-[30%]' />
            </div>


            <div className='w-full mt-[20px] flex justify-start gap-[20px] items-center'>
                <img data-aos="flip-right" src='/img/42.png' className='w-[30%]' />
                <div data-aos="zoom-in-left">
                    <h2 className='fabl text-[12px] mb-[10px]'>{t('box4.el2.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(4).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black!' key={index}>{t(`box4.el2.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className='w-full mt-[20px] flex justify-between items-center'>
                <div data-aos="zoom-in-right">
                    <h2 className='fabl text-[12px] mb-[10px]'>{t('box4.el3.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(4).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black!' key={index}>{t(`box4.el3.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>
                <img data-aos="flip-right" src='/img/43.png' className='w-[30%]' />
            </div>


            <div className='w-full mt-[20px] mb-[50px] flex justify-start gap-[20px] items-center'>
                <img data-aos="flip-right" src='/img/44.png' className='w-[30%]' />
                <div data-aos="zoom-in-left">
                    <h2 className='fabl text-[12px] mb-[10px]'>{t('box4.el4.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(5).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black!' key={index}>{t(`box4.el4.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>

            </div>



        </div>
    )
}

export default Box4
