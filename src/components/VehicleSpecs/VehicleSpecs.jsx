import css from "./VehicleSpecs.module.css";

export default function VehicleSpecs({ data }) {
  const formCheck = () => {
    switch (data.form) {
      case "alcove":
        return "Alcove";
      case "panelTruck":
        return "Panel truck";
      case "fullyIntegrated":
        return "Fully integrated";
      default:
        return "Unknown";
    }
  };
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.text}>Form</p>
        <p className={css.text}>{formCheck()}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Length</p>
        <p className={css.text}>{data.length}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Width</p>
        <p className={css.text}>{data.width}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Height</p>
        <p className={css.text}>{data.height}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Tank</p>
        <p className={css.text}>{data.tank}</p>
      </li>
      <li className={css.item}>
        <p className={css.text}>Consumption</p>
        <p className={css.text}>{data.consumption}</p>
      </li>
    </ul>
  );
}
