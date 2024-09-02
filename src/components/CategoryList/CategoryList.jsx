import Category from "../Category/Category";
import css from "./CategoryList.module.css";

export default function CategoryList({ data }) {
  return (
    <ul className={css.categoriesList}>
      {data.transmission === "automatic" ? (
        <Category text={"Automatic"} icon={"automatic"} />
      ) : (
        ""
      )}
      {data.engine === "petrol" ? (
        <Category text={"Petrol"} icon={"petrol"} />
      ) : (
        ""
      )}
      {data.bathroom ? <Category text={"Bathroom"} icon={"bathroom"} /> : ""}
      {data.AC ? <Category text={"AC"} icon={"ac"} /> : ""}
      {data.kitchen ? <Category text={"Kitchen"} icon={"kitchen"} /> : ""}
      {data.radio ? <Category text={"Radio"} icon={"radio"} /> : ""}
    </ul>
  );
}
