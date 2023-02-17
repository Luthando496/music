import axios from "axios";
import { productActions } from "./store";

// "proxy": "https://api.deezer.com",
const link = "https://api.deezer.com"

export const fetchProducts = (id) => {
  return async (dispatch) => {
    try {
      const info  = await fetch(`/track/${id}`).then(data=> data.json() );
      // const data = info.json()
      // const data2 = data.json()
      console.log(info)
      dispatch(productActions.fetchProducts(info));
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
        const data  = await fetch(`/search?q=${name}`).then(data => data.json().catch(err=> console.log(err)))
        dispatch(productActions.singleFetch(data));
        console.log(data)
      } catch (err) {
        // console.log(err);
        dispatch(productActions.singleFetchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
}



// export const searchDrink = (search) => {
//   return async (dispatch) => {
//       console.log(search)
//       try {
//         const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//         console.log(data)
//         dispatch(productActions.fetchProducts(data));
//       } catch (err) {
//         console.log(err);
//         dispatch(productActions.productSearchError(err.response && err.response.data.message
//           ? err.response.data.message
//           : err.message,));
//     }
//   }
// }