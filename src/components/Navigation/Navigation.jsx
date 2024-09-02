import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css.container}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.activeLink}` : css.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.activeLink}` : css.link
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </div>
  );
}
