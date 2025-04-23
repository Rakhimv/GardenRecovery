import Form from "./Form";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="p-[20px]">
            <div data-aos="zoom-in" className='flex w-full flex-col items-center fonth'>

                <div className="mt-[30px] w-full p-[30px] bg-[#ffffff30] flex flex-col items-center justify-center">
                    <p className='text-[#F1C86F] text-center fontb text-[16px] uppercase'>
                        {t('Footer.investmentOrRetreat')}
                    </p>

                    <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[20px]'>
                        {t('Footer.provenBusiness')}
                    </p>

                    <div className="w-full max-w-[100px] h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                    <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                        {t('Footer.solidRealEstate')}
                    </p>

                    <div className="w-full max-w-[100px] h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                    <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                        {t('Footer.residencyBonus')}
                    </p>

                    <div className="w-full max-w-[100px] h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                    <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                        {t('Footer.lifeAndBusinessOpportunity')}
                    </p>
                </div>
                <img src="/img/footerimg.png" alt="footer image" />

            </div>

            <Form />

            <div data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" className='flex w-full mb-[50px] flex-col items-center'>
                <p className='mt-[50px] text-[#ffffff] max-w-[390px] text-center fontb text-[24px] uppercase'>
                    {t('Footer.contactsAndViewing')}
                </p>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[20px]'>
                    {t('Footer.personalViewingOrOnlineTour')}
                </p>
                <div className="w-full max-w-[100px] h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>
                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('Footer.fullDocumentation')}
                </p>

            </div>

        </div>
    )
}

export default Footer;
