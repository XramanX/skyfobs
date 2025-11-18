import React from "react";
import styles from "../../styles/components/linkedSteps.module.scss";

export default function LinkedSteps({ items = [], size = "md" }) {
  if (!items || !items.length) return null;

  return (
    <nav
      className={`${styles.wrapper} ${styles[size]}`}
      aria-label="Process steps"
    >
      <ol className={styles.list}>
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={styles.item}>
              <div className={styles.node} tabIndex={0}>
                <span className={styles.icon} aria-hidden>
                  {it.icon}
                </span>
                <span className={styles.label}>{it.label}</span>
              </div>

              {!isLast && (
                <div className={styles.connector} aria-hidden>
                  <svg
                    className={styles.arrow}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      className={styles.arrowPath}
                      d="M2 12 L18 12 M12 6 L18 12 L12 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
