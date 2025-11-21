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
  speed = 60, // pixels per second
}) {
  const [paused, setPaused] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const colRef = useRef(null); // the element we transform
  const viewportRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const offsetRef = useRef(0);
  const measureRef = useRef(1); // holds height or width depending on axis

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

  // triple items for seamless loop
  const items = useMemo(() => [...icons, ...icons, ...icons], [icons]);

  // run once on mount to set client-only flags (avoid SSR mismatch)
  useEffect(() => {
    setIsClient(true);
    const mq =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(!!(mq && mq.matches));
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 980);

    const onResize = () => setIsMobile(window.innerWidth <= 980);
    const onPrefChange = (e) => setPrefersReducedMotion(e.matches);

    if (mq && mq.addEventListener) mq.addEventListener("change", onPrefChange);
    window.addEventListener("resize", onResize);

    return () => {
      if (mq && mq.removeEventListener)
        mq.removeEventListener("change", onPrefChange);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // measure loopable length (height for desktop, width for mobile)
  const measure = () => {
    const el = colRef.current;
    if (!el) return 1;
    if (isMobile) {
      // use 1/3 of scrollWidth because we duplicated items 3x
      return Math.max(1, el.scrollWidth / 3);
    }
    // vertical: use half of scrollHeight (we duplicated 3x but layout is column)
    return Math.max(1, el.scrollHeight / 2);
  };

  useEffect(() => {
    // update measurement whenever layout/mode changes
    measureRef.current = measure();
    // keep offset within bounds
    offsetRef.current = offsetRef.current % (measureRef.current || 1);

    // ensure transform reset on mode change
    if (colRef.current) {
      if (isMobile)
        colRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      else
        colRef.current.style.transform = `translateY(-${offsetRef.current}px)`;
    }
  }, [isMobile, isClient, items.length]);

  // animation loop (single loop handles both axes)
  useEffect(() => {
    if (!isClient || prefersReducedMotion) return;

    lastRef.current = null;
    const step = (time) => {
      if (paused) {
        lastRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (!lastRef.current) lastRef.current = time;
      const dt = (time - lastRef.current) / 1000; // seconds
      lastRef.current = time;

      // speed is in px/sec - works for both axes
      measureRef.current = measure();
      offsetRef.current =
        (offsetRef.current + dt * speed) % (measureRef.current || 1);

      if (colRef.current) {
        if (isMobile) {
          colRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        } else {
          colRef.current.style.transform = `translateY(-${offsetRef.current}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isClient, isMobile, paused, speed, prefersReducedMotion]);

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
              <div ref={viewportRef} className={styles.marqueeViewportVertical}>
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
