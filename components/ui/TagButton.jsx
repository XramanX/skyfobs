import React from "react";
import styles from "../../styles/components/button.module.scss";

export default React.memo(function TagButton({
  children,
  active = false,
  className = "",
  ...rest
}) {
  const cls = `${styles.tagBtn} ${active ? styles.active : ""} ${className}`;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
});
