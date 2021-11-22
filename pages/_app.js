import 'tailwindcss/tailwind.css'

import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <h1>Hello</h1>
    </Layout>
  );
}

export default MyApp;
