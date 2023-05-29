import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Container } from "@mui/material";
import classes from "./whyUs.module.css";
import whyData from "../../../assets/data/whyUsPoints";
import SliderItem from "./SliderItem";

const WhyUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    pauseOnHover: true,
    onInit: () => {
      // HereI programmatically set the heigth of each element equal to the height of the highest element in the slider for style purposes
      // possibly has other solutions, i have not forun them, you are welcome to share if you know some =)

      const slickSlides = document.querySelectorAll(".slick-slide");
      let maxHeigth = 0;
      slickSlides.forEach((el) => {
        const computedStyle = window.getComputedStyle(el);
        const height = computedStyle.getPropertyValue("height");
        const heightNumber = parseInt(height, 10);

        if (maxHeigth < heightNumber) {
          maxHeigth = heightNumber;
        }
      });

      slickSlides.forEach((el) => {
        el.childNodes[0].style.height = maxHeigth + "px";
      });
    },
    onChange: () => {
      debugger;
    },
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
