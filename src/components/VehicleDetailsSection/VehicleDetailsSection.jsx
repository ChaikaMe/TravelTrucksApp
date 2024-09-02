import PhotoList from "../PhotoList/PhotoList";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation";
import css from "./VehicleDetailsSection.module.css";

export default function VehicleDetailsSection({ camper }) {
  return (
    <section className={css.detailsSection}>
      <div className={css.titleContainer}>
        <h2>{camper.name}</h2>
        <div className={css.titleData}>
          <RatingAndLocation data={camper} />
          <h2>€{camper.price}.00</h2>
        </div>
      </div>
      <PhotoList camper={camper} />
      <p className={css.text}>{camper.description}</p>
    </section>
  );
}
