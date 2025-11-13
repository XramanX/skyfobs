import React from "react";
import styles from "../../styles/components/button.module.scss";

const Button = React.forwardRef(
  ({ children, variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.button ?? ""} ${
          styles[variant] ?? ""
        } ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default React.memo(Button);
