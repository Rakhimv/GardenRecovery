import { useTranslation } from "react-i18next"

const Box6 = () => {
    const { t } = useTranslation()

    return (
        <div

            style={{
                backgroundImage: `url('/img/bg6.svg')`,
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
                {t('box6.title')}

            </p>

            <div className="mt-[20px]"></div>
            {Array(4).fill("").map((_, index) => (
                <div
                    key={index}
                    data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
                    className="flex w-full mt-6 flex-col items-center"
                >
                    {index !== 0 && <img className="w-4" src="/img/2_item.svg" />}
                    <h2 className="textsys mt-6 text-black! max-w-[500px] text-center text-[15px] font-bold!">
                        {t(`box6.items.item${index + 1}.name`)}
                    </h2>
                    <p className="whitespace-pre-line italic! text-black max-w-[500px] text-center text-sm">
                        {t(`box6.items.item${index + 1}.description`)}
                    </p>
                </div>
            ))}


            <div className="mt-[100px]"></div>


        </div>
    )
}

export default Box6