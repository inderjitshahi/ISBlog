import '../styles/globals.css'
import { IsblogProvider } from '../context/IsblogContext'
function MyApp({ Component, pageProps }) {
  return(
  <IsblogProvider>
    <Component {...pageProps} />
  </IsblogProvider>
  );
}

export default MyApp
