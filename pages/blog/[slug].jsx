import React from "react";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../data/blogs";
import Link from "next/link";
import styles from "../../styles/components/blogPost.module.scss";
import { formatDateFriendly } from "@/utils/formatDate";

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} — Skyfobs</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <main className={styles.page}>
        <div className="container">
          <article className={styles.post}>
            <header className={styles.header}>
              <div className={styles.meta}>
                <time dateTime={post.date}>
                  {formatDateFriendly(post.date)}
                </time>
                <span> • </span>
                <span>{post.readingMins} min read</span>
              </div>

              <h1 className={styles.title}>{post.title}</h1>
              <div
                className={styles.hero}
                dangerouslySetInnerHTML={{ __html: post.heroHtml }}
              />
            </header>

            <section
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <footer className={styles.footer}>
              <Link href="/blog" className="button ghost">
                ← Back to articles
              </Link>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}
