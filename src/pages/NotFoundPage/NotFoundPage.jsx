import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.text}>Opps! Page not found!</p>
      <p className={css.text}>
        Please visit out <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
