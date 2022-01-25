import Layout from '../components/Layout';
import Head from 'next/head';
import '../styles/globals.css';
import '../public/slick-carousel/slick/slick.css';
import '../public/slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home One || Kenne</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <Layout>
       <Component {...pageProps} />
      </Layout>
       
     
    </>
  );
}

export default MyApp;
