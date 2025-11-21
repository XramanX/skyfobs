import React, { useMemo, useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../data/blogs";
import BlogCard from "../../components/common/BlogCard";
import styles from "../../styles/components/blogIndex.module.scss";
import Button from "@/components/ui/Button";
import { IoArrowBack } from "react-icons/io5";

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  const [filterTags, setFilterTags] = useState(["all"]);
  const [pending, setPending] = useState(["all"]);
  const uniqueTags = useMemo(() => {
    const set = new Set();
    posts.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const togglePending = (tag) => {
    if (tag === "all") {
      setPending(["all"]);
      return;
    }
    setPending((prev) => {
      const hasAll = prev.includes("all");
      const has = prev.includes(tag);
      if (has) {
        const next = prev.filter((p) => p !== tag);
        return next.length === 0 ? ["all"] : next;
      } else {
        const next = hasAll ? [tag] : [...prev, tag];
        return next;
      }
    });
  };

  const applySelection = () => {
    const next = !pending || pending.length === 0 ? ["all"] : pending;
    setFilterTags(next);
    if (detailsRef.current) detailsRef.current.open = false;
  };

  const clearSelection = () => {
    setPending(["all"]);
    setFilterTags(["all"]);
    if (detailsRef.current) detailsRef.current.open = false;
  };

  const filtered = useMemo(() => {
    if (!filterTags || filterTags.length === 0) return posts;
    if (filterTags.includes("all")) return posts;
    return posts.filter((p) =>
      (p.tags || []).some((t) => filterTags.includes(t))
    );
  }, [posts, filterTags]);

  const detailsRef = useRef(null);
  useEffect(() => {
    function onDoc(e) {
      if (!detailsRef.current) return;
      if (!detailsRef.current.open) return;
      if (!detailsRef.current.contains(e.target))
        detailsRef.current.open = false;
    }
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;
    const onToggle = () => {
      if (el.open) setPending(filterTags);
    };
    el.addEventListener("toggle", onToggle);
    return () => el.removeEventListener("toggle", onToggle);
  }, [filterTags]);

  return (
    <>
      <Head>
        <title>Blog - Skyfobs</title>
      </Head>

      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>Insights & articles</h1>
            <p className={styles.lead}>
              Thoughts on cloud platforms, migration, observability and
              security.
            </p>

            <div className={styles.controls}>
              <div className={styles.multiselect}>
                <label htmlFor="tagMultiselect" className={styles.srOnly}>
                  Filter posts by tags
                </label>

                <details ref={detailsRef} className={styles.details}>
                  <summary id="tagMultiselect" className={styles.summary}>
                    <span className={styles.summaryLabel}>
                      {filterTags.includes("all")
                        ? "All topics"
                        : filterTags.join(", ")}
                    </span>
                    <span className={styles.chev}>▾</span>
                  </summary>

                  <div className={styles.options}>
                    <div className={styles.optionsList}>
                      <button
                        type="button"
                        className={`${styles.option} ${
                          pending.includes("all") ? styles.activeOption : ""
                        }`}
                        onClick={() => togglePending("all")}
                        aria-pressed={pending.includes("all")}
                      >
                        All topics
                      </button>

                      {uniqueTags.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className={`${styles.option} ${
                            pending.includes(t) ? styles.activeOption : ""
                          }`}
                          onClick={() => togglePending(t)}
                          aria-pressed={pending.includes(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className={styles.actions}>
                      <Button type="button" onClick={applySelection}>
                        Apply
                      </Button>
                      <Button
                        className={styles.btnClear}
                        onClick={clearSelection}
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </header>

          <div className={styles.grid}>
            {filtered.map((p) => (
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
            <Link href="/">
              <Button variant="ghost">
                <IoArrowBack /> Back to home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
