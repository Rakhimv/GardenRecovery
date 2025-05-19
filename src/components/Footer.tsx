import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div
            style={{
                backgroundImage: `url('/img/footer.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: "auto",
                width: '100%',
            }}
            className="p-[20px] w-full flex flex-col items-center">


            <div
                data-aos="fade-up"
                style={{
                    backgroundImage: `url('/img/footer2.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    height: "auto",
                    width: '100%',
                }}
                className="relative max-w-[400px]! mt-[100px] w-[80%] p-[15px] flex flex-col items-center h-[500px]!">
                <p className="text-[13px]">
                    <a href="mailto:clients@gardenrecovery.me">
                        clients@gardenrecovery.me
                    </a>
                </p>
                <p className="mt-[15px] text-[13px]">
                    <a href="https://gardenrecovery.me" target="_blank" rel="noopener noreferrer">
                        gardenrecovery.me
                    </a>
                </p>


                <div className="flex items-center justify-center mt-[15px] gap-[5px]">
                    <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer">
                        <img src="/img/wh.png" className="w-[30px]" alt="WhatsApp" />
                    </a>
                    <a href="https://instagram.com/#" target="_blank" rel="noopener noreferrer">
                        <img src="/img/ins.png" className="w-[30px]" alt="Instagram" />
                    </a>
                </div>



                <p className="absolute bottom-[20px] right-[10px] left-[10px] whitespace-pre-line max-w-[450px] text-black! text-center textsys text-[10px]">
                    {t('footer.sub')}

                </p>

            </div>

            <div data-aos="zoom-in" className="mt-[50px] relative">
                <button className="fabl cursor-pointer hover:scale-[1.1] transition-all text-[25px] text-[#000000] px-[40px] py-[15px] rounded-[50px] border-1 border-[#00000030]  bg-[#ffffff30]">SOS</button>


                <img src="/img/cursor.svg" className="absolute left-[85%] bottom-[-10px] w-[20px]" />
            </div>

            <div className="mt-[100px]"></div>

        </div>
    )
}

export default Footer;
