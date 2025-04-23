import { Trans, useTranslation } from 'react-i18next';

const Materials = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full p-[20px]"
      style={{
        backgroundImage: `url('/img/materbg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
      }}
    >
      <div data-aos="zoom-in" className="flex w-full flex-col items-center">
        <p className="mt-[50px] text-[#F1C86F] max-w-[300px] text-center fontb text-[25px] uppercase">
          {t('Materials.title')}
        </p>

        <p className="whitespace-pre-line max-w-[300px] text-[15px] text-center text-white fonth mt-[20px]">
          <Trans
            i18nKey="Materials.floor1"
            components={{ strong: <strong className="font-bold" /> }}
          />
        </p>

        <p className="whitespace-pre-line max-w-[300px] text-[15px] text-center text-white fonth mt-[5px]">
          <Trans
            i18nKey="Materials.floor2"
            components={{ strong: <strong className="font-bold" /> }}
          />
        </p>

        <p className="whitespace-pre-line max-w-[300px] text-[15px] text-center text-white fonth mt-[5px]">
          <Trans
            i18nKey="Materials.heating"
            components={{ strong: <strong className="font-bold" /> }}
          />
        </p>

        <p className="whitespace-pre-line max-w-[300px] text-[15px] text-center text-white fonth mt-[5px]">
          <Trans
            i18nKey="Materials.insulation"
            components={{ strong: <strong className="font-bold" /> }}
          />
        </p>
      </div>

      <div className="h-[800px]"></div>
    </div>
  );
};

export default Materials;
