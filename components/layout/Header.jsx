import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavDropdown from "./NavDropdown";
import NAV from "../../data/nav";
import styles from "../../styles/components/header.module.scss";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [openMobile, setOpenMobile] = useState(false);

  const nav = useMemo(() => NAV, []);

  useEffect(() => {
    const handleRoute = () => setOpenMobile(false);
    router.events?.on?.("routeChangeStart", handleRoute);
    return () => router.events?.off?.("routeChangeStart", handleRoute);
  }, [router.events]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenMobile(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const toggleMobile = useCallback(() => setOpenMobile((v) => !v), []);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.left}>
              <Link href="/" className={styles.logo} aria-label="Home">
                <Image
                  src="/skyfobs.png"
                  alt="Skyfobs logo"
                  width={140}
                  height={40}
                  priority
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>

            <nav className={styles.center} aria-label="Primary navigation">
              <ul className={styles.navList}>
                {nav.map((n, idx) => (
                  <li key={idx} className={styles.navItem}>
                    {n.items ? (
                      <NavDropdown title={n.label} items={n.items} />
                    ) : (
                      <Link href={n.href || "#"} className={styles.navLink}>
                        {n.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.right}>
              <Link href="/contact" className={styles.contactBtn}>
                Contact
              </Link>

              <button
                className={`${styles.burger} ${openMobile ? styles.open : ""}`}
                aria-label="Toggle menu"
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

      <div
        className={`${styles.mobileNav} ${openMobile ? styles.show : ""}`}
        aria-hidden={!openMobile}
      >
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
                          <Link href={it.href || "#"}>{it.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={n.href || "#"}>{n.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileUtils}>
            <Link href="/contact" className={styles.contactBtn}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
