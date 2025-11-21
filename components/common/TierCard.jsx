import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Button from "./ui/Button";
import styles from "../../styles/components/partners.module.scss";

export default function TierCard({ tier }) {
  return (
    <article
      className={`${styles.tierCard} ${tier.featured ? styles.featured : ""}`}
      id={`${tier.id}-card`}
      aria-labelledby={`${tier.id}-title`}
    >
      {tier.featured && <div className={styles.ribbon}>Most popular</div>}

      <div className={styles.tierTop}>
        <h3 className={styles.tierName} id={`${tier.id}-title`}>
          {tier.name}
        </h3>
        <div className={styles.priceWrap}>
          <div className={styles.tierPrice}>{tier.price}</div>
          <div className={styles.priceBadge}>
            {tier.price === "Free" ? "Start" : "Billed annually"}
          </div>
        </div>
      </div>

      <p className={styles.tierLead}>{tier.lead}</p>
      <p className={styles.tierShort}>{tier.short}</p>

      <ul className={styles.tierBenefits}>
        {tier.benefits.map((b, i) => (
          <li key={i} className={styles.featureRow}>
            <span className={styles.featureIcon} aria-hidden>
              <FaCheck />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className={styles.tierCtas}>
        <Link href="/contact">
          <Button>Apply now</Button>
        </Link>
        <Link href={`/partners/${tier.id}-details`}>
          <Button variant="ghost">Learn more</Button>
        </Link>
      </div>
    </article>
  );
}
