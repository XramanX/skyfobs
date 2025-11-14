// components/sections/HomeBlogs.jsx
import React from "react";
import Link from "next/link";
import { getLatest } from "../../data/blogs";
import BlogCard from "../common/BlogCard";
import styles from "../../styles/components/homeBlogs.module.scss";

export default function HomeBlogs() {
  const posts = getLatest(3);

  return (
    <section className={styles.section} aria-label="Latest articles">
      <div className="container">
        <div className={styles.header}>
          <h2>Latest from our blog</h2>
          <p>
            Quick reads about cloud migration, security and platform
            engineering.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((p) => (
            <BlogCard
              key={p.slug}
              title={p.title}
              slug={p.slug}
              date={p.date}
              excerpt={p.excerpt}
              readingMins={p.readingMins}
              tags={p.tags}
            />
          ))}
        </div>

        <div className={styles.row}>
          <Link href="/blog" className="button ghost">
            See all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
