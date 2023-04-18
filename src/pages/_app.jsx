import { RecoilRoot } from 'recoil';

import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
