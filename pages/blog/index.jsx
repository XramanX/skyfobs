import React from "react";
import Head from "next/head";
import { getAllPosts } from "../../data/blogs";
import BlogCard from "../../components/common/BlogCard";
import styles from "../../styles/components/blogIndex.module.scss";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IoArrowBack } from "react-icons/io5";

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Skyfobs</title>
      </Head>

      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <h1>Insights & articles</h1>
            <p>
              Thoughts on cloud platforms, migration, observability and
              security.
            </p>
          </header>

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

          <div className={styles.moreRow}>
            <Link href="/" className="button ghost">
              <Button>
                <IoArrowBack /> Back to home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
