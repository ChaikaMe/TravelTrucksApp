import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.itemsContainer}>
        <div className={css.textContainer}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <NavLink className={css.button} to="/catalog">
          <Button text="Viev Now" type="button" />
        </NavLink>
      </div>
    </div>
  );
}
