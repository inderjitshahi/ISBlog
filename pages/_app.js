import '../styles/globals.css'
import { IsblogProvider } from '../context/isblogContext';
function MyApp({ Component, pageProps }) {
  return(
  <IsblogProvider>
    <Component {...pageProps} />
  </IsblogProvider>
  );
}

export default MyApp
