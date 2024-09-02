import Line from "../Line/Line";
import css from "./FilterFragment.module.css";

export default function FilterFragment({ title, children }) {
  return (
    <div className={css.container}>
      <h3>{title}</h3>
      <Line />
      <div className={css.buttonList}>{children}</div>
    </div>
  );
}
