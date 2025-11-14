// components/sections/Hero.jsx
import React, { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { FaPause, FaPlay, FaCloud, FaAws, FaNodeJs } from "react-icons/fa";
import {
  SiDigitalocean,
  SiVmware,
  SiIcloud,
  SiOracle,
  SiGooglecloud,
  SiCloudflare,
  SiMongodb,
} from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";

import styles from "../../styles/components/hero.module.scss";
import Button from "../ui/Button";

export default function Hero({
  title = "Your Trusted Technology Partner",
  subtitle = "Leading provider of software development and managed cloud services",
  speed = 60,
}) {
  const [paused, setPaused] = useState(false);
  const colRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const heightRef = useRef(1);
  const offsetRef = useRef(0);

  const icons = useMemo(
    () => [
      FaAws,
      SiGooglecloud,
      SiDigitalocean,
      SiVmware,
      SiIcloud,
      SiOracle,
      SiCloudflare,
      FaNodeJs,
      SiMongodb,
      AiOutlineKubernetes,
    ],
    []
  );

  const items = useMemo(() => [...icons, ...icons, ...icons], [icons]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const measure = (el) => {
    if (!el) return 0;
    return Math.max(1, el.scrollHeight / 2);
  };

  useEffect(() => {
    const update = () => {
      heightRef.current = measure(colRef.current);
      offsetRef.current = offsetRef.current % heightRef.current;
      if (colRef.current) {
        colRef.current.style.transform = `translateY(-${offsetRef.current}px)`;
      }
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    lastRef.current = null;

    const step = (time) => {
      if (paused) {
        lastRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (!lastRef.current) lastRef.current = time;
      const dt = (time - lastRef.current) / 1000;
      lastRef.current = time;

      offsetRef.current =
        (offsetRef.current + dt * speed) % (heightRef.current || 1);

      if (colRef.current) {
        colRef.current.style.transform = `translateY(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, speed, prefersReducedMotion]);

  const togglePaused = () => {
    if (prefersReducedMotion) return;
    setPaused((p) => !p);
  };

  return (
    <section className={styles.hero} aria-label="Hero - cloud services">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.kicker}>
              <FaCloud className={styles.kickerIcon} />
              <span>Cloud & Managed Services</span>
            </div>

            <h1 className={styles.title}>{title}</h1>

            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.ctaRow}>
              <Link href="/contact" passHref>
                <Button as="a">Contact us</Button>
              </Link>
            </div>

            <p className={styles.trustText}>
              Trusted by cloud-first businesses and enterprise platforms.
            </p>
          </div>

          <aside className={styles.right} aria-hidden={false}>
            <div className={styles.logosCard}>
              <div className={styles.marqueeViewportVertical}>
                <div ref={colRef} className={styles.marqueeColumn} aria-hidden>
                  {items.map((Icon, i) => {
                    const C = Icon;
                    return (
                      <div key={`v-${i}`} className={styles.logoWrap}>
                        <C size={48} className={`cloudIcon ${C.name}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.pauseBtn}
              aria-pressed={paused}
              aria-label={
                prefersReducedMotion
                  ? "Animation disabled by system preference"
                  : paused
                  ? "Play logo animation"
                  : "Pause logo animation"
              }
              onClick={togglePaused}
            >
              {paused ? <FaPlay size={14} /> : <FaPause size={14} />}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
