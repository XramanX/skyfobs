import React from "react";
import Link from "next/link";
import styles from "../../styles/components/blogCard.module.scss";
import { formatDateFriendly } from "@/utils/formatDate";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function BlogCard({
  title,
  slug,
  date,
  excerpt,
  readingMins,
  tags = [],
}) {
  const formatted = formatDateFriendly(date);

  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <time dateTime={date} className={styles.date}>
          {formatted}
        </time>
        <span className={styles.dot}>•</span>
        <span className={styles.read}>{readingMins} min read</span>
      </div>

      <h3 className={styles.title}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>

      <p className={styles.excerpt}>{excerpt}</p>

      <div className={styles.row}>
        <Link href={`/blog/${slug}`} className={styles.readMore}>
          Read article <IoArrowForwardOutline />
        </Link>

        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
