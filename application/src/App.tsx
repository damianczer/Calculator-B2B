import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import { useTheme } from './hooks/useTheme';
import { APP_NAME } from './constants/app';
import { ROUTES } from './constants/routes';

const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const UOPPage = lazy(() => import('./pages/UOPPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));
const CurrenciesPage = lazy(() => import('./pages/CurrenciesPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));

function App() {
  const { isLoading } = useTheme();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <BrowserRouter>
        <Layout headerTitle={APP_NAME}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<CalculatorPage />} />
              <Route path={ROUTES.UOP} element={<UOPPage />} />
              <Route path={ROUTES.COMPANY} element={<CompanyPage />} />
              <Route path={ROUTES.CURRENCIES} element={<CurrenciesPage />} />
              <Route path={ROUTES.GUIDE} element={<GuidePage />} />
              <Route path={ROUTES.PRIVACY} element={<PrivacyPolicyPage />} />
              <Route path={ROUTES.TERMS} element={<TermsOfServicePage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
