import css from "./PhotoList.module.css";

export default function PhotoList({ camper }) {
  return (
    <ul className={css.photoList}>
      {camper.gallery.map((item, index) => {
        return (
          <li key={index + 1}>
            <img className={css.photo} src={item.thumb} alt={camper.name} />
          </li>
        );
      })}
    </ul>
  );
}
