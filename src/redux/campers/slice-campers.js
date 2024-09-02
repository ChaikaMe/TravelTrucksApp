import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchExactCamper } from "./ops-campers";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favourite: JSON.parse(localStorage.getItem("favouriteCampers")) || [],
    item: {},
    isLoading: false,
    error: false,
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const camperId = action.payload;
      const isFavourite = state.favourite.includes(camperId);

      if (isFavourite) {
        state.favourite = state.favourite.filter((id) => id !== camperId);
      } else {
        state.favourite.push(camperId);
      }
      localStorage.setItem("favouriteCampers", JSON.stringify(state.favourite));
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchExactCamper.fulfilled, (state, action) => {
        state.item = action.payload;
      }),
});

export const { toggleFavourite } = campersSlice.actions;

const campersReducer = campersSlice.reducer;
export default campersReducer;
