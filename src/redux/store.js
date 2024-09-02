import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice-campers";
import filterReducer from "./filters/slice-filter";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterReducer,
  },
});

export default store;
