import { useSelector } from "react-redux";
import css from "./VehicleReviews.module.css";
import { selectCamper } from "../../redux/campers/selectors-campers";
import Review from "../Review/Review";

export default function VehicleReviews() {
  const camper = useSelector(selectCamper);
  return (
    <>
      {camper.reviews == undefined ? (
        ""
      ) : (
        <ul className={css.container}>
          {camper.reviews.map((review, index) => (
            <Review data={review} key={index + 1} />
          ))}
        </ul>
      )}
    </>
  );
}
