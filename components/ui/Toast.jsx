import React, { useEffect, useState } from "react";
import styles from "../../styles/components/toast.module.scss";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function Toast({
  id,
  type = "success",
  title,
  message,
  onClose,
  ttl = 3500,
}) {
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(() => onClose?.(id), 260);
  };

  useEffect(() => {
    const t = setTimeout(close, ttl);
    return () => clearTimeout(t);
  }, [ttl]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`${styles.toast} ${
        type === "success" ? styles.success : styles.error
      } ${closing ? styles.closing : ""}`}
    >
      <div className={styles.iconWrap}>
        {type === "success" ? (
          <FiCheckCircle size={20} />
        ) : (
          <FiXCircle size={20} />
        )}
      </div>

      <div className={styles.body}>
        {title && <div className={styles.title}>{title}</div>}
        {message && <div className={styles.message}>{message}</div>}
      </div>

      <button
        className={styles.close}
        onClick={close}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
}
