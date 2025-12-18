import { memo } from 'react';
import RevenueCard from '../components/calculator/RevenueCard';
import SettingsCard from '../components/calculator/SettingsCard';
import CostsCard from '../components/calculator/CostsCard';
import ResultsCard from '../components/calculator/ResultsCard';

const CalculatorPage = memo(() => {
    return (
        <div className="w-full h-full flex items-center justify-center p-6">
            <div className="w-full max-w-[1600px] h-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
                    <RevenueCard />
                    <SettingsCard />
                    <CostsCard />
                    <ResultsCard netIncome={0} />
                </div>
            </div>
        </div>
    );
});

CalculatorPage.displayName = 'CalculatorPage';

export default CalculatorPage;
