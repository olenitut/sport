import classes from "./logo.module.css";
import logoImg from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href="/">
      <img src={logoImg} alt="logo" className={classes.logo__img} />
    </a>
  );
};

export default Logo;
