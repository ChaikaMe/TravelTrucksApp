import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/campers");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchExactCamper = createAsyncThunk(
  "campers/fetchExactCamper",
  async (camperId, thunkAPI) => {
    try {
      const responce = await axios.get(`/campers/${camperId}`);
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
