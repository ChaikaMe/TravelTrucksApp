import css from "./Filters.module.css";
import FilterEquipment from "../FilterEquipment/FilterEquipment";
import FilterType from "../FilterType/FilterType";

export default function Filters() {
  return (
    <div className={css.container}>
      <p className={css.text}>Filters</p>
      <FilterEquipment />
      <FilterType />
    </div>
  );
}
