import { useSelector } from "react-redux";
import {
  selectFilteredCampers,
  selectIsLoading,
} from "../../redux/campers/selectors-campers";
import Loader from "../Loader/Loader";
import VehicleListItem from "../VehicleListItem/VehicleListItem";
import css from "./VehicleList.module.css";
import { useState } from "react";

export default function VehicleList() {
  const campers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);
  const [num, setNum] = useState(4);
  const visibleCampers = campers.slice(0, num);
  const handleClick = () => {
    const tempNum = num + 4;
    setNum(tempNum);
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {visibleCampers.map((camper) => (
              <li key={camper.id}>
                <VehicleListItem data={camper} />
              </li>
            ))}
          </>
        )}
      </ul>
      {num < campers.length ? (
        <button className={css.button} onClick={() => handleClick()}>
          Load more
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
