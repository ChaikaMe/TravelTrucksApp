import { useSelector } from "react-redux";
import {
  selectFilteredCampers,
  selectIsLoading,
} from "../../redux/campers/selectors-campers";
import Loader from "../Loader/Loader";
import VehicleListItem from "../VehicleListItem/VehicleListItem";
import css from "./VehicleList.module.css";
import { useEffect, useState } from "react";

export default function VehicleList() {
  const campers = useSelector(selectFilteredCampers);
  const isLoading = useSelector(selectIsLoading);
  const [num, setNum] = useState(4);
  const visibleCampers = campers.slice(0, num);

  useEffect(() => {
    setNum(4);
  }, [campers]);

  const handleClick = () => {
    const tempNum = num + 4;
    setNum(tempNum);
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {isLoading ? (
          <div className={css.loader}>
            <Loader />
          </div>
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
