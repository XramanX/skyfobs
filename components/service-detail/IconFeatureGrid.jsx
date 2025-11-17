import React from "react";
import styles from "./serviceDetail.module.scss";

export default function IconFeatureGrid({ items = [] }) {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {items.map((it, i) => (
            <div key={i} className={styles.featureCard} tabIndex={0}>
              <div className={styles.iconWrap}>
                <div className={styles.iconCircle}>{it.icon}</div>
              </div>
              <h3 className={styles.featureTitle}>{it.title}</h3>
              <p className={styles.featureText}>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
