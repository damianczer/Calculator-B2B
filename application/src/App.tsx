import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CalculatorPage from './pages/CalculatorPage';
import UOPPage from './pages/UOPPage';
import CompanyPage from './pages/CompanyPage';
import GuidePage from './pages/GuidePage';
import { APP_NAME } from './constants/app';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout headerTitle={APP_NAME}>
        <Routes>
          <Route path={ROUTES.HOME} element={<CalculatorPage />} />
          <Route path={ROUTES.UOP} element={<UOPPage />} />
          <Route path={ROUTES.COMPANY} element={<CompanyPage />} />
          <Route path={ROUTES.GUIDE} element={<GuidePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
