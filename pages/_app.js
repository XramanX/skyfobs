import "../styles/globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealClass = "reveal-on-scroll";
    const inViewClass = "in-view";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            const delay = Number(el.getAttribute("data-delay")) || 0;
            window.setTimeout(() => el.classList.add(inViewClass), delay);
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    const els = Array.from(document.querySelectorAll(`.${revealClass}`));
    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
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
