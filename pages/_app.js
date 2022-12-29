import '../styles/globals.css'
import { IsblogProvider } from '../context/IsblogContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (
    <IsblogProvider key={router.asPath}>
      <Component {...pageProps} />
    </IsblogProvider>
  );
}

export default MyApp
