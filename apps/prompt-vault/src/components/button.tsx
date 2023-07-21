import React from "react";
import styles from "./button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

class Button extends React.Component<ButtonProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <button className={styles.button} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;
