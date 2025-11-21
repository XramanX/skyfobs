import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "../../styles/components/navdropdown.module.scss";

function NavDropdownInner({ title, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={toggle}
      >
        <span className={styles.navItem}>{title}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          aria-hidden
          focusable="false"
        >
          <path
            d="M1 1l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`${styles.menu} ${open ? styles.open : ""}`}
        role="menu"
        aria-hidden={!open}
      >
        {items.map((it, i) => (
          <Link
            key={i}
            href={it.href || "#"}
            className={styles.item}
            role="menuitem"
            onClick={() => {
              setOpen(false);
            }}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default React.memo(NavDropdownInner);
