import axios from "axios";
import { productActions } from "./store";

// const clientID =33df413dac444e339b49bd0dc57fba7d;
// const clientSecret = 727ecaf3686e4cd088d55e9e19b1b3bf;

export const fetchProducts = (id) => {
  return async (dispatch) => {
    try {
      const {data}  = await axios.get(`https://api.deezer.com/track/${id}`);
      // const data2 = data.json()
      console.log(data)
      dispatch(productActions.fetchProducts(data));
    } catch (err) {
      console.log(err);
      dispatch(productActions.fetchProductsError(err.response && err.response.data.message
        ? err.response.data.message
        : err.message,));
  }
}
}


export const fetchSingleProduct = (name) => {
  console.log(name)
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`https://api.deezer.com/search?q=${name}`);
        dispatch(productActions.singleFetch(data));
        console.log(data)
      } catch (err) {
        console.log(err);
        dispatch(productActions.singleFetchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
}



export const searchDrink = (search) => {
  return async (dispatch) => {
      console.log(search)
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        console.log(data)
        dispatch(productActions.fetchProducts(data));
      } catch (err) {
        console.log(err);
        dispatch(productActions.productSearchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
}