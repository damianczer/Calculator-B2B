import Layout from './components/layout/Layout';
import RevenueCard from './components/calculator/RevenueCard';
import SettingsCard from './components/calculator/SettingsCard';
import CostsCard from './components/calculator/CostsCard';
import ResultsCard from './components/calculator/ResultsCard';
import { APP_NAME } from './constants/app';

function App() {
  return (
    <Layout headerTitle={APP_NAME}>
      <section className="h-full w-full flex items-center justify-center px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full max-w-[1600px] h-[600px]">
          <RevenueCard />
          <SettingsCard />
          <CostsCard />
          <ResultsCard />
        </div>
      </section>
    </Layout>
  );
}

export default App;
