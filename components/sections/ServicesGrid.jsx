// components/sections/ServicesGrid.jsx
import React from "react";
import styles from "../../styles/components/services.module.scss";
import Link from "next/link";

const defaultServices = [
  {
    id: 1,
    title: "Product Design",
    desc: "UI/UX, prototyping, design systems",
    href: "/services#design",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Next.js, React, performance-first",
    href: "/services#web",
  },
  {
    id: 3,
    title: "Mobile Apps",
    desc: "React Native, cross-platform",
    href: "/services#mobile",
  },
];

export default function ServicesGrid({ services = defaultServices }) {
  return (
    <section className={styles.services ?? ""} aria-label="Services">
      <div className="container">
        <h2 className={styles.heading ?? ""}>What we do</h2>
        <div className={styles.grid ?? ""}>
          {services.map((s) => (
            <article key={s.id} className={styles.card ?? ""}>
              <h3 className={styles.cardTitle ?? ""}>{s.title}</h3>
              <p className={styles.cardDesc ?? ""}>{s.desc}</p>
              <Link href={s.href} className={styles.cardLink ?? ""}>
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
