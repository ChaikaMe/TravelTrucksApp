import { createSlice } from "@reduxjs/toolkit";

const sliceFilter = createSlice({
  name: "filter",
  initialState: {
    location: "",
    equipment: {
      AC: false,
      transmission: "manual",
      kitchen: false,
      TV: false,
      bathroom: false,
    },
    type: { form: "" },
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    changeType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { changeLocation } = sliceFilter.actions;
export const { changeEquipment } = sliceFilter.actions;
export const { changeType } = sliceFilter.actions;

export default sliceFilter.reducer;
