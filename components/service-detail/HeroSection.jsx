import React from "react";
import styles from "./serviceDetail.module.scss";
import Link from "next/link";
import Button from "../ui/Button";
import Image from "next/image";

export default function HeroSection({ title, intro }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.kicker}>Service</p>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroIntro}>{intro}</p>
            <div className={styles.heroActions}>
              <Link href="/contact">
                <Button>Talk to us</Button>
              </Link>
            </div>
          </div>
          <div className={styles.heroRight} aria-hidden>
            <div className={styles.heroCard}>
              <Image
                src="/services.svg"
                alt="Service illustration"
                fill
                priority
                sizes="(max-width: 640px) 70vw,
             (max-width: 1024px) 40vw,
             320px"
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
