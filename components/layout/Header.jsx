import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavDropdown from "./NavDropdown";
import NAV from "../../data/nav";
import styles from "../../styles/components/header.module.scss";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);
  const rafRef = useRef(null);
  const mobileNavRef = useRef(null);

  const nav = useMemo(() => NAV, []);

  useEffect(() => {
    const handleRoute = () => setOpenMobile(false);
    router.events?.on?.("routeChangeStart", handleRoute);
    return () => router.events?.off?.("routeChangeStart", handleRoute);
  }, [router.events]);

  const closeMobileNav = useCallback(() => {
    setOpenMobile(false);
    const root = mobileNavRef.current;
    if (root) {
      const openDetails = root.querySelectorAll("details[open]");
      openDetails.forEach((d) => d.removeAttribute("open"));
    }
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenMobile(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleMobile = useCallback(() => setOpenMobile((v) => !v), []);

  useEffect(() => {
    const enter = 80;
    const exit = 40;
    let ticking = false;

    const update = () => {
      const y = window.scrollY || 0;
      lastScroll.current = y;
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(() => {
          if (y > enter && !scrolled) setScrolled(true);
          if (y < exit && scrolled) setScrolled(false);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(rafRef.current);
    };
  }, [scrolled]);

  return (
    <header className={styles.header}>
      <div className={`${styles.bar} ${scrolled ? styles.pill : ""}`}>
        <div className={styles.headerContainer}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <Link
                href="/"
                className={styles.logo}
                aria-label="Home"
                onClick={closeMobileNav}
              >
                <Image
                  src="/skyfobs.png"
                  alt="Skyfobs logo"
                  width={140}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <nav className={styles.center}>
              <ul className={styles.navList}>
                {nav.map((n, i) => (
                  <li key={i} className={styles.navItem}>
                    {n.items ? (
                      <NavDropdown title={n.label} items={n.items} />
                    ) : (
                      <Link
                        href={n.href || "#"}
                        className={styles.navLink}
                        onClick={closeMobileNav}
                      >
                        {n.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.right}>
              <Link
                href="/contact"
                className={styles.contactBtn}
                onClick={closeMobileNav}
              >
                Contact
              </Link>

              <button
                className={`${styles.burger} ${openMobile ? styles.open : ""}`}
                aria-expanded={openMobile}
                onClick={toggleMobile}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.mobileNav} ${openMobile ? styles.show : ""}`}>
        <div className="container">
          <ul className={styles.mobileList}>
            {nav.map((n, i) => (
              <li key={i}>
                {n.items ? (
                  <details>
                    <summary>{n.label}</summary>
                    <ul>
                      {n.items.map((it, j) => (
                        <li key={j}>
                          <Link href={it.href || "#"} onClick={closeMobileNav}>
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={n.href || "#"} onClick={closeMobileNav}>
                    {n.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileUtils}>
            <Link
              href="/contact"
              className={styles.contactBtn}
              onClick={closeMobileNav}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
