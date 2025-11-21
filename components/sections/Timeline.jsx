import React from "react";
import styles from "../../styles/components/timeline.module.scss";

const EVENTS = [
  {
    year: "2021",
    title: "Founded",
    text: "Started as a small consulting team solving integration challenges for data base migration.",
  },
  {
    year: "2022",
    title: "Cloud-first shift",
    text: "Built managed cloud offerings and automated platform tooling for customers.",
  },
  {
    year: "2023",
    title: "Product & services",
    text: "Launched service packages for migration, observability and security.",
  },
  {
    year: "2024",
    title: "Managed services expansion",
    text: "Scaled fully managed cloud, DevOps and support offerings for enterprise workloads.",
  },
  {
    year: "2025",
    title: "AI/GenAI",
    text: "Integrated AI/GenAI solutions to enhance platform automation and insights.",
  },
];

export default function Timeline({ events = EVENTS, id = "our-story" }) {
  return (
    <section className={styles.timelineSection} aria-labelledby={id}>
      <div className="container">
        <h2 id={id} className={styles.sectionTitle}>
          Our story
        </h2>

        <div className={styles.timelineWrap}>
          <ol className={styles.timeline} role="list">
            {events.map((e, idx) => {
              const even = idx % 2 === 0;
              return (
                <li
                  key={e.year + idx}
                  className={`${styles.item} ${
                    even ? styles.left : styles.right
                  }`}
                >
                  <div className={styles.marker} aria-hidden>
                    <span className={styles.dot} />
                    <span className={styles.year}>{e.year}</span>
                  </div>

                  <div className={styles.card} tabIndex={0}>
                    <h3 className={styles.eventTitle}>{e.title}</h3>
                    <p className={styles.eventText}>{e.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
