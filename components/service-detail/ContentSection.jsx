import React, { useEffect, useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./serviceDetail.module.scss";

export default function ContentSection({ sections = [] }) {
  const articleRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 720);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(`.${styles.block}`) || [];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const onSelectChange = (e) => {
    const id = e.target.value;
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.articleWrap}>
      <div className={styles.containerInner}>
        <aside className={styles.toc} aria-hidden={isMobile}>
          <nav aria-label="On this page">
            <ul>
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`}>
                    <FiChevronRight className={styles.tocIcon} aria-hidden />
                    <span>{s.heading}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className={styles.articleColumn}>
          <article className={styles.article} ref={articleRef}>
            {sections.map((s, i) => (
              <section
                key={i}
                id={`section-${i}`}
                className={styles.block}
                aria-labelledby={`heading-${i}`}
              >
                <h2 id={`heading-${i}`}>{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
