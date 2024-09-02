import css from "./RatingAndLocation.module.css";
import icons from "../../img/icons.svg";

export default function RatingAndLocation({ data }) {
  return (
    <div className={css.rlContainer}>
      <p className={css.rlText}>
        <svg className={css.ratingIcon}>
          <use href={`${icons}#icon-rating`} />
        </svg>
        {data.rating}({data.reviews.length} Reviews)
      </p>
      <p className={css.rlText}>
        <svg className={css.mapIcon}>
          <use href={`${icons}#icon-map`} />
        </svg>
        {data.location}
      </p>
    </div>
  );
}
