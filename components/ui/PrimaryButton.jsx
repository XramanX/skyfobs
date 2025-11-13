import React from "react";
import styles from "../../styles/components/button.module.scss";

export default React.memo(function PrimaryButton({
  children,
  onClick,
  className = "",
  ...rest
}) {
  return (
    <button
      type="button"
      className={`${styles.primaryBtn} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
});
