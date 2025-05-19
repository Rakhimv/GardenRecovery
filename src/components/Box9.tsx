import { useTranslation } from "react-i18next"

const Box9 = () => {
    const { t } = useTranslation()

    return (
        <div
            style={{
                backgroundImage: `url('/img/bg9.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: "auto",
                width: '100%',
            }}

            className="p-[20px] w-full">


            <p
                data-aos="fade-up"
                className="mt-[10px] fabl max-w-[450px] text-[#f0ebe6]! text-center text-[20px]">
                {t('box9.title')}

            </p>

            <p
                data-aos="fade-up"
                className="whitespace-pre-line mt-[20px] text-[#f0ebe6] max-w-[500px] text-center text-sm">
                {t(`box9.sub`)}
            </p>

            <div className="w-full mt-[20px] flex flex-col gap-[20px]">
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" src="/img/box9/1.png" className="w-full" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" src="/img/box9/2.png" className="w-full" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" src="/img/box9/3.png" className="w-full" />
            </div>

        </div>
    )
}

export default Box9