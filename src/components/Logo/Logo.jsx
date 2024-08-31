import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import icons from "../../img/icons.svg";

export default function Logo() {
  return (
    <NavLink to="/">
      <svg className={css.logotype}>
        <use href={`${icons}#logotype`} />
      </svg>
    </NavLink>
  );
}
