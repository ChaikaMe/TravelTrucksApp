import { useSelector } from "react-redux";
import CategoryList from "../CategoryList/CategoryList";
import css from "./VehicleFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors-campers";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

export default function VehicleFeatures() {
  const camper = useSelector(selectCamper);
  return (
    <div className={css.container}>
      <CategoryList data={camper} />
      <VehicleDetails data={camper} />
    </div>
  );
}
