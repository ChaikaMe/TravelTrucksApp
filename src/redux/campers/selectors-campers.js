import { createSelector } from "@reduxjs/toolkit";
import {
  selectEquipment,
  selectLocation,
  selectType,
} from "../filters/selectors-filter";

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.item;

export const selectError = (state) => state.campers.error;
export const selectIsLoading = (state) => state.campers.isLoading;

export const selectfavouriteCampers = (state) => state.campers.favourite;

const locationFilteredCampers = createSelector(
  [selectCampers, selectLocation],
  (campers, location) => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(location.toLowerCase())
    );
  }
);

const equipmentFilteredCampers = createSelector(
  [locationFilteredCampers, selectEquipment],
  (campers, equipment) => {
    const choosedEquipment = Object.fromEntries(
      Object.entries(equipment).filter(
        ([key, value]) => value === true || value === "automatic"
      )
    );
    return campers.filter((camper) => {
      return Object.keys(choosedEquipment).every((key) => {
        return (
          choosedEquipment[key] === null ||
          camper[key] === choosedEquipment[key]
        );
      });
    });
  }
);

const typeFilteredCampers = createSelector(
  [equipmentFilteredCampers, selectType],
  (campers, type) => {
    if (type.form === "") {
      return campers;
    }
    return campers.filter((camper) => camper.form === type.form);
  }
);

const unFavouriteFilteredCampers = createSelector(
  [typeFilteredCampers, selectfavouriteCampers],
  (filteredCampers, favouriteIds) => {
    return filteredCampers.filter(
      (camper) => !favouriteIds.includes(camper.id)
    );
  }
);

const favouritesFiltered = createSelector(
  [selectCampers, selectfavouriteCampers],
  (campers, favouriteIds) => {
    return campers.filter((camper) => favouriteIds.includes(camper.id));
  }
);

export const selectFilteredCampers = createSelector(
  [favouritesFiltered, unFavouriteFilteredCampers],
  (favourites, filtered) => {
    return [...favourites, ...filtered];
  }
);
