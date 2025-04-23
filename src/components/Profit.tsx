import { useTranslation} from 'react-i18next'

const Profit = () => {
    const { t } = useTranslation()

    return (
        <div className="p-[20px]">
            <div className='flex w-full flex-col items-center fonth'>
                <p data-aos="zoom-in" className='mt-[50px] text-white max-w-[300px] text-center fontb text-[25px] uppercase'>
                    {t('Profit.title')}
                </p>

                <p data-aos="zoom-in" className='whitespace-pre-line max-w-[300px] text-[15px] text-center text-white fonth mt-[15px]'>
                    {t('Profit.intro')}
                </p>

                <div data-aos="fade-up" className="overflow-x-auto p-4">
                    <table className="min-w-full text-white text-sm text-left">
                        <thead className="bg-[#88806E]">
                            <tr>
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2 border border-[#ffffff70] border-t-0 text-center fontb whitespace-pre-line">
                                    {t('Profit.table.header1')}
                                </th>
                                <th className="px-4 py-2 border border-t-0 border-[#ffffff70] text-center border-r-0 fontb whitespace-pre-line">
                                    {t('Profit.table.header2')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {['summer', 'october', 'nov_dec', 'holiday', 'winter'].map(key => (
                                <tr key={key}>
                                    <td className="px-4 py-2 border border-l-0 border-[#ffffff70] fontb">
                                        {t(`Profit.table.rows.${key}.period`)}
                                    </td>
                                    <td className="px-4 py-2 border border-[#ffffff70]">
                                        {t(`Profit.table.rows.${key}.occupancy`)}
                                    </td>
                                    <td className="px-4 py-2 border border-r-0 border-[#ffffff70]">
                                        {t(`Profit.table.rows.${key}.price`)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-center gap-[8px]">
                    <p className='mt-[50px] text-white max-w-[300px] text-center fontb text-[16px] uppercase'>
                        {t('Profit.grossTitle')}
                    </p>

                    <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[15px]'>
                        {t('Profit.gross.summer')}
                    </p>
                    <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[15px]'>
                        {t('Profit.gross.winter')}
                    </p>
                    <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[15px]'>
                        {t('Profit.gross.holiday')}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-[8px]">
                    <p className='mt-[50px] text-white max-w-[300px] text-center fontb text-[16px] uppercase'>
                        {t('Profit.summaryTitle')}
                    </p>
                    <p className='mt-[15px] text-white max-w-[300px] text-center fontb text-[16px] uppercase'>
                        {t('Profit.summaryAmount')}
                    </p>
                    <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[0px]'>
                        {t('Profit.summaryDesc')}
                    </p>
                </div>

                <div className="w-full h-[1px] mb-[15px] mt-[15px] bg-white opacity-20"></div>

                <div className='flex w-full flex-col items-center'>
                    <p className='text-white max-w-[300px] text-center fontb text-[16px] uppercase'>
                        {t('Profit.fourHousesAmount')}
                    </p>
                    <p className='max-w-[300px] text-[15px] text-center text-white fonth mt-[0px]'>
                        {t('Profit.fourHousesDesc')}
                    </p>
                </div>

                <div className='flex w-full flex-col items-center mt-[50px]'>
                    <p className='text-white max-w-[300px] text-center fontb text-[16px] uppercase'>
                        {t('Profit.expensesTitle')}
                    </p>
                    <p className='text-white max-w-[300px] text-center fontb text-[16px] uppercase mt-[20px]'>
                        {t('Profit.expensesAmount')}
                    </p>
                    <p className='whitespace-pre-line max-w-[300px] text-[15px] text-center text-white fonth mt-[5px]'>
                        {t('Profit.expensesDesc')}
                    </p>
                </div>

                <div data-aos="flip-right" className="w-full p-[30px] flex flex-col items-center gap-[20px] mb-[30px] justify-center bg-[#ffffff30] mt-[40px]">
                    <p className='text-[#F1C86F] max-w-[300px] text-center fontb text-[25px] uppercase'>
                        {t('Profit.netProfitPercent')}
                    </p>
                    <p className='whitespace-pre-line text-white text-center fontb text-[14px] uppercase'>
                        {t('Profit.netProfitDesc')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profit
