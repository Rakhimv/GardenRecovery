import { useTranslation } from "react-i18next"

const Box7 = () => {
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
                {t('box7.title')}

            </p>

            <div



                className="mt-[20px]"></div>
            {Array(5).fill("").map((_, index) => (
                <div
                    data-aos="fade-up"
                    data-aos-delay={100*index}
                    key={index}
                    className="flex w-full mt-6 flex-col items-center"
                >
                    <p className="whitespace-pre-line text-black max-w-[500px] text-center text-sm">
                        {t(`box7.items.item${index + 1}`)}
                    </p>
                </div>
            ))}


            <div className="w-full mt-[50px] mb-[50px] flex flex-col gap-[20px]">
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" src="/img/box7/2.png" className="w-full" />
                <img data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" src="/img/box7/1.png" className="w-full" />
            </div>

        </div>
    )
}

export default Box7