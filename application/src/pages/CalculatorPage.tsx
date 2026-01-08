import { memo } from 'react';
import RevenueCard from '../components/calculator/RevenueCard';
import SettingsCard from '../components/calculator/SettingsCard';
import CostsCard from '../components/calculator/CostsCard';
import ResultsCard from '../components/calculator/ResultsCard';
import { useB2BCalculator } from '../hooks/useB2BCalculator';

const CalculatorPage = memo(() => {
    const {
        sources,
        setSources,
        costs,
        setCosts,
        settings,
        setSettings,
        calculations
    } = useB2BCalculator();

    return (
        <div className="h-full flex flex-col bg-slate-50 dark:bg-slate-950">
            <div className="max-w-[1600px] mx-auto w-full flex flex-col h-full">
                <div className="min-h-full flex flex-col border-x border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto">
                    <div className="w-full">
                        <ResultsCard
                            netIncome={calculations.netIncome}
                            breakdown={calculations.breakdown}
                            invoiceTotal={calculations.invoiceTotal}
                        />
                    </div>
                    <div className="px-4 lg:px-8 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:auto-rows-fr">
                            <div className="flex flex-col min-h-[400px]">
                                <RevenueCard
                                    sources={sources}
                                    setSources={setSources}
                                />
                            </div>
                            <div className="flex flex-col min-h-[400px]">
                                <SettingsCard
                                    settings={settings}
                                    setSettings={setSettings}
                                />
                            </div>
                            <div className="flex flex-col min-h-[400px]">
                                <CostsCard
                                    costs={costs}
                                    setCosts={setCosts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

CalculatorPage.displayName = 'CalculatorPage';

export default CalculatorPage;
