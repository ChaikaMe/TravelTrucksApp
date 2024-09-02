import css from "./SearchSettings.module.css";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/ops-campers";

export default function SearchSettings() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCampers());
  };

  return (
    <div className={css.container}>
      <Location />
      <Filters />
      <div className={css.button} onClick={handleClick}>
        <Button text="Search" type="button" />
      </div>
    </div>
  );
}
