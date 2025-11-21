import React from "react";
import styles from "../../styles/components/partners.module.scss";

export default function ResourceCard({ title, children }) {
  return (
    <div className={styles.resourceCard} role="article" aria-label={title}>
      <h4>{title}</h4>
      <p className={styles.small}>{children}</p>
    </div>
  );
}
