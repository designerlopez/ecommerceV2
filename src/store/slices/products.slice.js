import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoadingGlobal } from "./isLoading.slice";

export const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducsGlobal: (state, action) => action.payload,
  },
});

export const { setProducsGlobal } = products.actions;

export const getAllProducts = () => (dispatch) => {
  dispatch(setIsLoadingGlobal(true))
  const URL = "https://e-commerce-api.academlo.tech/api/v1/products";
  return axios
    .get(URL)
    .then((res) => dispatch(setProducsGlobal(res.data.data.products)))
    .catch((err) => console.log(err))
    .finally(() => dispatch(setIsLoadingGlobal(false)))
};

export default products.reducer;
