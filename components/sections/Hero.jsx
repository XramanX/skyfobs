import React, { useState, useRef, useEffect, useMemo } from "react";
import { FaPause, FaPlay, FaCloud } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiDigitalocean, SiVmware, SiIcloud, SiOracle } from "react-icons/si";
import styles from "../../styles/components/hero.module.scss";
import Button from "../ui/Button";

export default function Hero({
  title = "Your Trusted Technology Partner",
  subtitle = "Leading provider of software development and managed cloud services",
  speed = 30,
}) {
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const [offset, setOffset] = useState(0);

  const logos = [
    FaAws,
    SiDigitalocean,
    SiVmware,
    SiIcloud,
    SiOracle,
    FaAws,
    SiDigitalocean,
    SiVmware,
    SiIcloud,
    SiOracle,
    FaAws,
    SiDigitalocean,
    SiVmware,
    SiIcloud,
    SiOracle,
  ];

  const logosDup = useMemo(() => [...logos, ...logos], [logos]);

  const measure = () => {
    if (!contentRef.current) return 0;
    const total = contentRef.current.scrollHeight;
    return total / 2;
  };

  useEffect(() => {
    let originalHeight = measure();
    let lastTime = null;

    const step = (time) => {
      if (paused) {
        lastTime = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      if (lastTime == null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      offsetRef.current =
        (offsetRef.current + dt * speed) % (originalHeight || 1);
      setOffset(offsetRef.current);

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    const onResize = () => {
      originalHeight = measure();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [paused, speed]);

  const marqueeStyle = {
    transform: `translateY(-${offset}px)`,
  };

  return (
    <section className={styles.hero} aria-label="Hero - cloud services">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <FaCloud className={styles.kickerIcon} />
              <span>Cloud & Managed Services</span>
            </div>

            <h1 className={styles.title}>{title}</h1>

            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.ctaRow}>
              <Button onClick={() => (window.location.href = "/contact")}>
                Contact us
              </Button>
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/cloud-audit")}
              >
                Get a cloud audit
              </Button>
            </div>

            <p className={styles.trustText}>
              Trusted by cloud-first businesses and enterprise platforms.
            </p>
          </div>

          {/* RIGHT – Cloud Provider Icons */}
          <aside className={styles.right}>
            <div className={styles.logosCard} ref={containerRef}>
              <div
                className={styles.marqueeJS}
                ref={contentRef}
                style={marqueeStyle}
              >
                {logosDup.map((Icon, i) => (
                  <div className={styles.logoWrap} key={i}>
                    <Icon size={48} className={styles.cloudIcon} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={styles.pauseBtn}
              aria-pressed={paused}
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? <FaPlay size={14} /> : <FaPause size={14} />}
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
