import classes from "./sliderItem.module.css";

const SliderItem = ({ title, text, img, color }) => {
  return (
    <div className={classes["slider-item"]} style={{ backgroundColor: color }}>
      <div className={classes["slider-item__container"]}>
        <img src={img} alt="icon" className={classes["slider-item__img"]} />
        <h3 className={classes["slider-item__title"]}>{title}</h3>
      </div>

      <p className={classes["slider-item__text"]}>{text}</p>
    </div>
  );
};

export default SliderItem;
