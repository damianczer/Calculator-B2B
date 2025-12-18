import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CalculatorPage from './pages/CalculatorPage';
import UOPPage from './pages/UOPPage';
import CompanyPage from './pages/CompanyPage';
import CurrenciesPage from './pages/CurrenciesPage';
import GuidePage from './pages/GuidePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import LoadingSpinner from './components/common/LoadingSpinner';
import { useTheme } from './hooks/useTheme';
import { APP_NAME } from './constants/app';
import { ROUTES } from './constants/routes';

function App() {
  const { isLoading } = useTheme();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <BrowserRouter>
        <Layout headerTitle={APP_NAME}>
          <Routes>
            <Route path={ROUTES.HOME} element={<CalculatorPage />} />
            <Route path={ROUTES.UOP} element={<UOPPage />} />
            <Route path={ROUTES.COMPANY} element={<CompanyPage />} />
            <Route path={ROUTES.CURRENCIES} element={<CurrenciesPage />} />
            <Route path={ROUTES.GUIDE} element={<GuidePage />} />
            <Route path={ROUTES.PRIVACY} element={<PrivacyPolicyPage />} />
            <Route path={ROUTES.TERMS} element={<TermsOfServicePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
