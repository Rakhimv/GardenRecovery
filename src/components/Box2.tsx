import { useTranslation } from "react-i18next"

const Box2 = () => {
    const { t } = useTranslation()

    const sections = [
        { title: "t1", text: "tx1" },
        { title: "t2", text: "tx2" },
        { title: "t3", text: "tx3" },
        { title: "t4", text: "tx4" },
        { title: "t5", text: "tx5" },
    ];

    return (
        <div

            style={{
                backgroundImage: `url('/img/2_bg.svg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
            }}

            className="p-[20px] w-full">



            <div className="mt-[50px]"></div>
            {sections.map((section, index) => (
                <div
                    data-aos={index%2===0 ? "zoom-in-right" : "zoom-in-left"}
                    key={index}
                    className="flex w-full mt-12 flex-col items-center"
                >
                    {index !== 0 && <img className="w-4" src="/img/2_item.svg" />}
                    <h2 className="fabl mt-2 text-black max-w-[500px] text-center text-[15px] font-bold">
                        {t(`box2.${section.title}`)}
                    </h2>
                    <p className="whitespace-pre-line text-black max-w-[500px] text-center text-sm">
                        {t(`box2.${section.text}`)}
                    </p>
                </div>
            ))}


            <div className="mt-[100px]"></div>


        </div>
    )
}

export default Box2