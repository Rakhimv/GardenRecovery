import { useTranslation } from "react-i18next"

const Box10 = () => {
    const { t } = useTranslation()

    return (
        <div
            style={{
                backgroundImage: `url('/img/bg10.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: "auto",
                width: '100%',
            }}

            className="p-[20px] w-full">


            <p
                data-aos="fade-up"
                className="mt-[10px] fabl max-w-[450px] text-black! text-center text-[20px]">
                {t('box10.title')}

            </p>
            <div className="mt-[50px]"></div>
            {Array(6).fill('').map((_, index) => (
                <div
                    key={index}
                    data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                    className="flex w-full mt-4 flex-col items-center"
                >
                    {index !== 0 && <img className="w-4 mb-4" src="/img/2_item.svg" />}
                    <p className="whitespace-pre-line text-black max-w-[500px] text-center text-[10px]">
                        {t(`box10.items.item${index + 1}`)}
                    </p>
                </div>
            ))}


            <div className="w-full mt-[50px] px-[20%] flex flex-col gap-[20px]">
                <img data-aos="flip-up" src="/img/box10/1.png" className="w-full" />
                <img data-aos="flip-up" src="/img/box10/2.png" className="w-full" />
            </div>


            <div data-aos="zoom-in" className="w-full flex mt-[10px] mb-[10px] items-center justify-center">
                <svg width="10" height="87" viewBox="0 0 16 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.95825 0.516113L9.05004 4.51506L5.0511 4.60685L4.95931 0.607903M9.14183 8.51401L9.23362 12.513L5.23468 12.6047L5.14289 8.6058M9.32541 16.5119L9.4172 20.5108L5.41826 20.6026L5.32647 16.6037M9.50899 24.5098L9.60078 28.5087L5.60184 28.6005L5.51005 24.6016M9.69257 32.5077L9.78436 36.5066L5.78541 36.5984L5.69363 32.5995M9.87615 40.5056L9.96794 44.5045L5.96899 44.5963L5.8772 40.5974M10.0597 48.5035L10.1515 52.5024L6.15257 52.5942L6.06078 48.5953M10.2433 56.5014L10.3351 60.5003L6.33615 60.5921L6.24436 56.5931M10.4269 64.4992L10.5187 68.4982L6.51973 68.59L6.42794 64.591M10.6105 72.4971L10.7023 76.4961L6.70331 76.5879L6.61152 72.5889M10.7941 80.495L10.8858 84.494L6.88689 84.5858L6.7951 80.5868" fill="#3C5462" />
                    <path d="M14.7278 77.5596L8.91294 85.6951L2.73094 77.8349" stroke="#3C5462" stroke-miterlimit="10" />
                </svg>

            </div>


            <p className="whitespace-pre-line text-black max-w-[500px] text-center text-[10px]">
                {t(`box10.sub`)}
            </p>


            <div className="mt-[50px]"></div>
        </div>
    )
}

export default Box10