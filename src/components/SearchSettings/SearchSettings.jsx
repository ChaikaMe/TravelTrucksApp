import css from "./SearchSettings.module.css";
import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/ops-campers";
import { useEffect, useState } from "react";
import {
  changeEquipment,
  changeLocation,
  changeType,
} from "../../redux/filters/slice-filter";
import { toggleFavourite } from "../../redux/campers/slice-campers";

export default function SearchSettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState({ form: "" });
  const [filterEquipment, setFilterEquipment] = useState({
    AC: false,
    transmission: "manual",
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const handleClick = () => {
    dispatch(changeLocation(filterLocation));
    dispatch(changeType(filterType));
    dispatch(changeEquipment(filterEquipment));
    dispatch(toggleFavourite());
  };

  return (
    <div className={css.container}>
      <Location setLocation={setFilterLocation} />
      <Filters
        equipment={filterEquipment}
        setEquipment={setFilterEquipment}
        setType={setFilterType}
      />
      <div className={css.button} onClick={handleClick}>
        <Button text="Search" type="button" />
      </div>
    </div>
  );
}
