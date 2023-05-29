import classNames from "classnames";

import classes from "./btn.module.css";

const Button = ({ text, type }) => {
  const btnClass = classNames(classes.btn, {
    [classes["btn--secondary"]]: type === "secondary",
  });

  return (
    <a className={btnClass} href="/">
      {text}
    </a>
  );
};

export default Button;
