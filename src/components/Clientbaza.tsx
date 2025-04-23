import { useTranslation } from 'react-i18next';

const ClientBaza = () => {
    const { t } = useTranslation();

    return (
        <div className="p-[20px] ">
            <div data-aos="zoom-in" className='flex w-full flex-col items-center fonth'>
                <p className='mt-[50px] text-white max-w-[310px] text-center fontb text-[21px] uppercase'>
                    {t('ClientBaza.title')}
                </p>    

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[15px]'>
                    <span className="font-bold">{t('ClientBaza.regularGuests.header')}</span>
                     {t('ClientBaza.regularGuests.countries')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[px]'>
                    <span className="font-bold">{t('ClientBaza.tourists.header')}</span>
                     {t('ClientBaza.tourists.countries')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('ClientBaza.nearbyBanya')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('ClientBaza.touristDestinations')}
                </p>

                <div className="mt-[30px] w-full p-[30px] bg-[#ffffff30] flex items-center justify-center">
                    <p className='text-[#F1C86F] text-center fontb text-[16px] uppercase'>{t('ClientBaza.ownership')}</p>
                </div>

                <div className='flex w-full flex-col items-center fontb'>
                    <p className='mt-[50px] text-white max-w-[310px] text-center fontb text-[25px] uppercase'>{t('ClientBaza.purchase')}</p>

                    <span className="text-[#F1C86F] mt-[20px]">{t('ClientBaza.purchasePrice.full')}</span>
                    <p className="text-white text-center">{t('ClientBaza.purchaseDetails.full')}</p>

                    <span className="text-[#F1C86F] mt-[20px]">{t('ClientBaza.purchasePrice.partial')}</span>
                    <p className="text-white text-center">{t('ClientBaza.purchaseDetails.partial')}</p>
                </div>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[25px] mb-[15px]"></div>

                <div className='flex w-full flex-col items-center fonth'>
                    <p className='mt-[10px] text-white max-w-[310px] text-center fontb text-[16px] uppercase'>{t('ClientBaza.paymentMethods.title')}</p>

                    <ul className="text-white text-center mt-[10px] list-disc">
                        <li>{t('ClientBaza.paymentMethods.euro')}</li>
                    </ul>
                    <ul className="text-white text-center list-disc">
                        <li>{t('ClientBaza.paymentMethods.usd')}</li>
                    </ul>
                    <ul className="text-white text-center list-disc">
                        <li>{t('ClientBaza.paymentMethods.crypto')}</li>
                    </ul>

                    <p className='max-w-[300px] text-[15px] mt-[15px] text-center text-white fonth'>
                        {t('ClientBaza.financing')}
                    </p>
                </div>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] mb-[15px]"></div>

                <div className='flex w-full flex-col items-center fonth mb-[20px]'>
                    <p className='mt-[30px] text-white max-w-[310px] text-center fontb text-[20px] uppercase'>{t('ClientBaza.vnzTitle')}</p>

                    <p className='max-w-[300px] text-[15px] mt-[15px] text-center text-white fonth'>
                        {t('ClientBaza.vnzDetails.first')}
                    </p>

                    <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] max-w-[100px] mb-[15px]"></div>

                    <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                        {t('ClientBaza.vnzDetails.second')}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default ClientBaza;
