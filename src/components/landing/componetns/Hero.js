import { Container } from "@mui/material";
import Button from "../../general/btn/Button";

import classes from "./Hero.module.css";
import img from "../../../assets/images/hero.png";

const Hero = () => {
  const containerStyle = {
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
  };

  return (
    <section className={classes.hero}>
      <Container style={containerStyle}>
        <div className={classes.hero__text}>
          <h1 className={classes.hero__heading}>
            Unleash Your Athletic Potential, Reach New Heights, and Embrace the
            Thrill of Sports Excellence
          </h1>
          <div className={classes.hero__actions}>
            <Button text="Sign up" />
            <Button text="Log in" type="secondary" />
          </div>
        </div>
        <div className={classes["hero__img-container"]}>
          <img src={img} alt="Phone screen" className={classes.hero__img} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
