import Layout from './components/layout/Layout';
import { APP_NAME } from './constants/app';

function App() {
  return (
    <Layout headerTitle={APP_NAME}>
      <section className="container py-12">
        <div className="mx-auto max-w-4xl space-y-8">

        </div>
      </section>
    </Layout>
  );
}

export default App;
