// components/common/ServiceCard.jsx
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "../../styles/components/card.module.scss";

export default React.memo(function ServiceCard({
  title,
  text,
  href = "#",
  variant = "default",
  learnMoreBtn = true,
}) {
  return (
    <article className={`${styles.card} ${styles[variant] ?? ""}`}>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
      </div>

      {learnMoreBtn && (
        <div className={styles.cardFooter}>
          <Link
            href={href}
            className={styles.cardLink}
            aria-label={`Learn more about ${title}`}
          >
            <span>Learn more</span>
            <FiArrowRight size={16} />
          </Link>
        </div>
      )}
    </article>
  );
});
