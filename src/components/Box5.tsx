import { useTranslation } from 'react-i18next'

const Box5 = () => {
    const { t } = useTranslation()

    return (
        <div
            className="w-full relative flex flex-col items-center p-[20px] pt-[0px]"
            style={{
                backgroundImage: `url('/img/bg5.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: "auto",
                width: '100%',
            }}
        >

            <p className="mt-[10px] fabl max-w-[450px] text-black! text-center text-[20px]">
                {t('box5.section1.header')}

            </p>

            <p className="whitespace-pre-line textsys text-left text-black! w-full text-[12px] fonth mt-[40px] font-normal!">
                <div>
                    <h2 className='textsys text-black! font-bold! text-[14px] mb-[10px]'>{t('box5.section1.list1.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(4).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black!' key={index}>{t(`box5.section1.list1.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>
            </p>





            <p className="whitespace-pre-line textsys text-left text-black! w-full text-[12px] fonth mt-[30px] font-normal!">
                <div>
                    <h2 className='textsys text-black! font-bold! text-[14px] mb-[10px]'>{t('box5.section1.list2.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(1).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black! max-w-[280px]' key={index}>{t(`box5.section1.list2.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>
            </p>

            <p className="whitespace-pre-line textsys text-left text-black! w-full text-[12px] fonth mt-[30px] font-normal!">
                <div>
                    <h2 className='textsys text-black! font-bold! text-[14px] mb-[10px]'>{t('box5.section1.list3.title')}</h2>
                    <ul className='list-disc pl-5'>
                        {Array(6).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black! max-w-[280px]' key={index}>{t(`box5.section1.list3.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>
            </p>



            <p className="mt-[50px] fabl max-w-[450px] text-black! text-center text-[15px]">
                {t('box5.section2.header')}

            </p>

            <p className="whitespace-pre-line textsys text-left text-black! w-full text-[12px] fonth mt-[30px] font-normal!">
                <div>
                    <ul className='list-disc pl-5'>
                        {Array(10).fill('').map((_, index) => (
                            <li className='text-[12px] textsys text-black! max-w-[280px]' key={index}>{t(`box5.section2.list1.items.item${index + 1}`)}</li>
                        ))}
                    </ul>
                </div>
            </p>
        </div>
    )
}

export default Box5
