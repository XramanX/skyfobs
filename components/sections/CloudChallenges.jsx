import React from "react";
import Image from "next/image";
import styles from "../../styles/components/cloudChallenges.module.scss";

export default function CloudChallenges({
  kicker = "CLOUD CHALLENGES",
  title = "Modern cloud demands a new approach",
  paragraphs = [
    "Cloud complexity is growing from rising costs to security gaps and scattered architectures. Legacy ways of working slow teams down.",
    "A modern cloud foundation brings automation, stability and speed so teams can innovate without friction.",
  ],
  illustration = "/cloud-challenges.png",
  delay = 80, // ms
}) {
  return (
    <section
      className={`${styles.section}`}
      aria-labelledby="cloud-challenges-title"
      data-delay={delay}
    >
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>{kicker}</div>

            <h2 id="cloud-challenges-title" className={styles.title}>
              {title}
            </h2>

            <div className={styles.content}>
              {paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={styles.right}
            role="img"
            aria-label="Cloud platform illustration"
          >
            <div className={styles.illustration}>
              <Image
                src={illustration}
                alt=""
                width={520}
                height={520}
                priority={false}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
