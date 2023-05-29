import { Container } from "@mui/material";
import classes from "./description.module.css";

const Description = () => {
  return (
    <Container>
      <section className={classes.description}>
        <div className={classes.description__meet}>
          <h2 className={classes.description__heading}>
            Meet Sporty <span>!</span>
          </h2>
          <p className={classes.description__text}>
            Crush Your Fitness Goals, Track Your Progress, and Dominate Every
            Workout. Achieve Peak Performance, Shatter Limits, and Become the
            Champion You Were Born to Be.
          </p>
          <p className={classes.description__text}>
            Get Ready for a Fitness Revolution and Take Your Training to the
            Next Level. Join the Fitness Revolution Today and Transform Your
            Body, Mind, and Life.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Description;
