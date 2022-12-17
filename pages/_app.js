import '../styles/globals.css'
import { IsblogProvider } from '../context/IsblogContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router=useRouter();
  return(
  <IsblogProvider key={router.asPath}>
    <Component {...pageProps}  />
  </IsblogProvider>
  );
}

export default MyApp
