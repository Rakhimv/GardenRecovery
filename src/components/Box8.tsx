import { useTranslation } from "react-i18next"

const Box8 = () => {
    const { t } = useTranslation()

    return (
        <div
            style={{
                backgroundImage: `url('/img/bg7.svg')`,
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
                {t('box8.title')}

            </p>

            <p
                data-aos="fade-up"
                className="whitespace-pre-line mt-[50px] opacity-70 text-black max-w-[500px] text-center text-sm">
                {t(`box8.sub`)}
            </p>

            <div className="w-full mt-[50px] mb-[70px] flex flex-col gap-[20px]">
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" src="/img/box8/1.png" className="w-full" />
                <div className="w-full overflow-hidden flex gap-[20px] justify-between items-center">
                    <img data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" src="/img/box8/2.png" className="w-[calc(50%-10px)]" />
                    <img data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" src="/img/box8/3.png" className="w-[calc(50%-10px)]" />
                </div>
            </div>

        </div>
    )
}

export default Box8