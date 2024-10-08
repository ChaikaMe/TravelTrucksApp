import { ToggleButton } from "@mui/material";
import icons from "../../img/icons.svg";
import css from "./VehicleListItem.module.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import CategoryList from "../CategoryList/CategoryList";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation";
import favouriteChanger from "../../helpers/favouriteChanger";
import { useState } from "react";

export default function VehicleListItem({ data }) {
  const tempData = localStorage.getItem("favouriteCampers") || [];
  const [isFavourite, setIsFavourite] = useState(tempData.includes(data.id));
  const handleClick = (id) => {
    favouriteChanger(id);
    const favouriteCampers = localStorage.getItem("favouriteCampers") || [];
    setIsFavourite(favouriteCampers.includes(data.id));
  };

  return (
    <div className={css.container}>
      <img className={css.photo} src={data.gallery[0].thumb} alt={data.name} />
      <div className={css.detailsContainer}>
        <div>
          <div className={css.titleContainer}>
            <h2 className={css.title}>{data.name}</h2>
            <h2 className={css.priceAndHeart}>
              €{data.price}.00
              <ToggleButton
                onClick={() => {
                  handleClick(data.id);
                }}
                selected={isFavourite}
                sx={{
                  "&.MuiToggleButton-root": {
                    border: "none",
                    p: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    height: "26px",
                    "&.Mui-selected": {
                      backgroundColor: "inherit",
                      fill: "var(--button)",
                    },
                  },
                }}
                value={"saved"}
              >
                <svg className={css.heartIcon}>
                  <use href={`${icons}#icon-heart`} />
                </svg>
              </ToggleButton>
            </h2>
          </div>
          <RatingAndLocation data={data} />
        </div>
        <p className={css.description}>{data.description}</p>
        <CategoryList data={data} />

        <NavLink className={css.showButton} to={`/catalog/${data.id}`}>
          <Button text={"Show more"} type={"button"} />
        </NavLink>
      </div>
    </div>
  );
}
