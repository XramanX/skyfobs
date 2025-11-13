// pages/_app.js
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
