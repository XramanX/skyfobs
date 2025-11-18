import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/components/progress.module.scss";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Progress({ label, value, icon = null, size = "md" }) {
  const pct = Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
  const [animatedPct, setAnimatedPct] = useState(0);
  const [displayNum, setDisplayNum] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setAnimatedPct(pct);
      setDisplayNum(pct);
      return;
    }

    cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    const duration = 700;

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      setAnimatedPct(eased * pct);
      setDisplayNum(Math.round(eased * pct));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setAnimatedPct(pct);
        setDisplayNum(pct);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pct]);

  return (
    <div
      className={`${styles.progressWrap} ${styles[size]}`}
      aria-hidden={false}
    >
      <div className={styles.row}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <div className={styles.meta}>
          <div className={styles.label} title={label}>
            {label}
          </div>
        </div>

        <div className={styles.badge} aria-hidden>
          {displayNum}%
        </div>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(animatedPct)}
      >
        <div
          className={styles.filler}
          style={{ width: `${animatedPct}%` }}
          aria-hidden
        />
      </div>

      <div className="sr-only" aria-live="polite">
        {displayNum} percent
      </div>
    </div>
  );
}
