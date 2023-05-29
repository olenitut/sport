import { Container } from "@mui/material";

import classes from "./Header.module.css";
import Button from "../../general/btn/Button";
import Logo from "../../general/logo/Logo";

const Header = () => {
  return (
    <Container>
      <header className={classes.header}>
        <Logo />
        <div className={classes.header__actions}>
          <nav className={classes["nav--desktop"]}>
            <a className={classes.nav__link} href="/">
              Why us
            </a>
            <a className={classes.nav__link} href="/">
              Features
            </a>
            <a className={classes.nav__link} href="/">
              Plan
            </a>
            <a className={classes.nav__link} href="/">
              Testimonials
            </a>
          </nav>
          <nav className="nav--mobile"></nav>
          <Button text="Sign up" />
        </div>
      </header>
    </Container>
  );
};

export default Header;
