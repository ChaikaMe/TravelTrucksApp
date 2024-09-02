import { Rating } from "@mui/material";
import css from "./Review.module.css";
import icons from "../../img/icons.svg";

export default function Review({ data }) {
  return (
    <li className={css.container}>
      <div className={css.userData}>
        <div className={css.ball}>{data.reviewer_name.slice(0, 1)}</div>
        <div className={css.nameNrating}>
          {data.reviewer_name}
          <Rating
            size="small"
            value={data.reviewer_rating}
            readOnly
            icon={
              <svg className={css.activeIcon}>
                <use href={`${icons}#icon-rating`} />
              </svg>
            }
            emptyIcon={
              <svg className={css.notActiveIcon}>
                <use href={`${icons}#icon-rating`} />
              </svg>
            }
          />
        </div>
      </div>
      <p className={css.comment}>{data.comment}</p>
    </li>
  );
}
