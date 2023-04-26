import "../styles/globals.css";
import Header from "../Components/Header.jsx"
import Footer from "../Components/Footer.jsx"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
