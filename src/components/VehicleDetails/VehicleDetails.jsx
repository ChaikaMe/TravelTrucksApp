import css from "./VehicleDetails.module.css";
import Line from "../Line/Line";
import VehicleSpecs from "../VehicleSpecs/VehicleSpecs";

export default function VehicleDetails({ data }) {
  return (
    <div className={css.container}>
      <h3>Vehicle details</h3>
      <Line />
      <VehicleSpecs data={data} />
    </div>
  );
}
