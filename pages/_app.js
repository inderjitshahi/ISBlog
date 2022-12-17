import '../styles/globals.css'
import { IsblogProvider } from '../context/IsblogContext';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return(
  <IsblogProvider>
    <Component {...pageProps} />
  </IsblogProvider>
  );
}

export default MyApp
