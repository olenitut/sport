import classes from "./sliderItem.module.css";

const SliderItem = ({ title, text }) => {
  return (
    <div className={classes["slider-item"]}>
      <h3 className={classes["slider-item__title"]}>{title}</h3>
      <p className={classes["slider-item__text"]}>{text}</p>
    </div>
  );
};

export default SliderItem;
