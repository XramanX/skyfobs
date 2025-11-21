import React from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../data/blogs";
import styles from "../../styles/components/blogPost.module.scss";
import { formatDateFriendly } from "@/utils/formatDate";
import Button from "@/components/ui/Button";
import { IoArrowBack } from "react-icons/io5";
import CodeBlock from "@/components/ui/CodeBlock";

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
        <title>{post.title} - Skyfobs</title>
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
              {post.heroHtml && (
                <div
                  className={styles.hero}
                  dangerouslySetInnerHTML={{ __html: post.heroHtml }}
                />
              )}
            </header>

            <section className={styles.content}>
              {Array.isArray(post.blocks) ? (
                post.blocks.map((b, i) => {
                  if (b.type === "html") {
                    return (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: b.html }}
                      />
                    );
                  }
                  if (b.type === "code") {
                    return (
                      <CodeBlock
                        key={i}
                        code={b.code}
                        lang={b.lang}
                        caption={b.caption}
                      />
                    );
                  }
                  return null;
                })
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                />
              )}
            </section>

            <footer className={styles.footer}>
              <Link href="/blog">
                <Button variant="ghost">
                  <IoArrowBack /> Back to articles
                </Button>
              </Link>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
}
