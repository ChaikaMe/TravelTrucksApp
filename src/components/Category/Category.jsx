import icons from "../../img/icons.svg";
import css from "./Category.module.css";

export default function Category({ text, icon }) {
  return (
    <li className={css.categoryItem}>
      <svg className={css.categoryIcon}>
        <use href={`${icons}#icon-${icon}`} />
      </svg>
      {text}
    </li>
  );
}
