import { Trans, useTranslation } from 'react-i18next';

const Box3 = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full relative flex flex-col items-center p-[20px] pt-[0px]"
      style={{
        backgroundImage: `url('/img/3/bg.svg')`,
        backgroundSize: '100%',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "#EAE6E2",
        height: '173vw',
        maxHeight: "900px",
        width: '100%',
      }}
    >

      <p className="mt-[10px] fabl max-w-[450px] text-center text-[20px]">
        {t('box3.title')}
      </p>

      <p className="whitespace-pre-line textsys text-black! text-[12px] fonth mt-[10px] font-normal!">
        <Trans
          i18nKey="box3.subtitle"
          components={{ strong: <strong className="font-bold!" /> }}
        />
      </p>


      <p
        data-aos="zoom-in"
        className="mt-[10%] textsys text-black! max-w-[450px] text-center font-bold! text-[11px]">
        {t('box3.txs')}
      </p>
      <p
        data-aos="fade-right"
        className="mt-[10%] textsys text-black! max-w-[450px] text-center text-[11px]">
        {t('box3.tx1')}
      </p>
      <p 
        data-aos="fade-left"
      className="mt-[10%] textsys text-black! max-w-[450px] text-center text-[11px]">
        {t('box3.tx2')}
      </p>
      <p
        data-aos="fade-right"
        className="mt-[15%] textsys text-black! max-w-[450px] text-center text-[11px]">
        {t('box3.tx3')}
      </p>


      <p
        data-aos="zoom-in"
        className="fabl text-black! max-w-[450px] text-center text-[13px] absolute bottom-[35%]">
        {t('box3.tx4')}
      </p>


      <p
        data-aos="fade-right"
        className="textsys whitespace-pre-line text-black! w-max text-center text-[10px] absolute bottom-[18%] left-[5%]">
        {t('box3.tx5')}
      </p>


      <p
        data-aos="fade-left"
        className="textsys whitespace-pre-line text-black! w-max text-center text-[10px] absolute bottom-[8%] right-[5%]">
        {t('box3.tx6')}
      </p>
      <p
        data-aos="fade-left"
        className="textsys italic! whitespace-pre-line text-black! w-max text-center text-[10px] absolute bottom-[5%] right-[5%]">
        {t('box3.tx7')}
      </p>


    </div>
  );
};

export default Box3;
