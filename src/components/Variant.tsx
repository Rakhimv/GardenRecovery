import { useTranslation } from 'react-i18next';

const Variant = () => {
    const { t } = useTranslation();

    return (
        <div className='w-full p-[20px]'
            style={{
                backgroundImage: `url('/img/variantbg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}
        >
            <div data-aos="zoom-in" className='flex w-full flex-col items-center'>
                <p className='mt-[50px] text-[#F1C86F] max-w-[390px] text-center fontb text-[24px] uppercase'>
                    {t('Variant.title')}
                </p>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[20px]'>
                    {t('Variant.peacefulArea')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] max-w-[100px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('Variant.gardeningSpace')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] max-w-[100px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('Variant.manageRentals')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] max-w-[100px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('Variant.safePlaceForGrandkids')}
                </p>

                <div className="w-full h-[1px] bg-[#ffffff60] mt-[15px] max-w-[100px] mb-[15px]"></div>

                <p className='max-w-[300px] text-[15px] text-center text-white fonth'>
                    {t('Variant.pristineNature')}
                </p>
            </div>

            <div className="h-[400px]"></div>

            <div data-aos="zoom-in-right" className="flex flex-col mb-[20px] items-center">
                <p className='mt-[50px] text-[#F1C86F] max-w-[390px] text-center fontb text-[18px] uppercase'>
                    {t('Variant.nearbyAttractions')}
                </p>

                <p className='max-w-[350px] text-[15px] text-center text-white fonth mt-[20px]'>
                    {t('Variant.attractionsList')}
                </p>
            </div>
        </div>
    )
}

export default Variant;
