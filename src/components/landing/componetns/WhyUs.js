import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Container } from "@mui/material";
import classes from "./whyUs.module.css";
import whyData from "../../../assets/data/whyUsPoints";
import SliderItem from "./SliderItem";
import "./sliderStyles.css";

const WhyUs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };
  return (
    <div className={classes.why}>
      <Container>
        <h2 className={classes.why__heading}>Why us?</h2>
        <Slider {...settings}>
          {whyData.map((el) => (
            <SliderItem {...el} key={el.title} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default WhyUs;
