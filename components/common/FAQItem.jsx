import React from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "../../styles/components/partners.module.scss";

export default function FAQItem({ q, a, open, onToggle }) {
  return (
    <details className={styles.faqItem} open={open} onToggle={onToggle}>
      <summary>
        <span>{q}</span>
        <FaChevronDown className={styles.chev} aria-hidden />
      </summary>

      <div className={styles.answer}>
        <p>{a}</p>
      </div>
    </details>
  );
}
