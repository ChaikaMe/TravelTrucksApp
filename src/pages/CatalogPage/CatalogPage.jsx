import css from "./CatalogPage.module.css";
import SearchSettings from "../../components/SearchSettings/SearchSettings";
import VehicleList from "../../components/VehicleList/VehicleList";

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <SearchSettings />
      <VehicleList />
    </div>
  );
}
