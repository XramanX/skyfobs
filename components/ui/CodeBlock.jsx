import React, { useState } from "react";
import styles from "../../styles/components/codeblock.module.scss";

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default function CodeBlock({ code = "", lang = "text", caption }) {
  const [copied, setCopied] = useState(false);
  const text = String(code).trim();
  const escaped = escapeHtml(text);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(false);
    }
  }

  return (
    <div className={styles.codeWrap}>
      {caption && <div className={styles.codeCaption}>{caption}</div>}
      <div className={styles.codeToolbar}>
        <div className={styles.lang}>{lang}</div>
        <button type="button" onClick={handleCopy} className={styles.copyBtn}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className={styles.pre}>
        <code
          className={styles.code + " " + `lang-${lang}`}
          dangerouslySetInnerHTML={{ __html: escaped }}
        />
      </pre>
    </div>
  );
}
