import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoadingGlobal } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
      setCartGlobal: (state, action) => action.payload
    }
})

export const { setCartGlobal } = cartSlice.actions;

export const getAllProductsCart = () => (dispatch) => {
  dispatch(setIsLoadingGlobal(true))
  const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
  return axios.get(URL, getConfig())
    .then(res => {
      dispatch(setCartGlobal(res.data.data.cart.products))
      dispatch(setIsLoadingGlobal(false))
    })
    .catch(err => console.log(err.data))
}

export default cartSlice.reducer;