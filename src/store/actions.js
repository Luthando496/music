import axios from "axios";
import { productActions } from "./store";

// "proxy": "https://api.deezer.com",
const link = "https://api.deezer.com"

export const fetchProducts = (id) => {
  return async (dispatch) => {
    try {
      const {data}  = await axios.get(`/track/${id}`);
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
        // const { data } = await axios.get(`/search?q=${name}`);
        const {data} = await axios.get('https://spotify81.p.rapidapi.com/search',{
          params: {q: `${name}`, type: 'multi', offset: '0', limit: '10', numberOfTopResults: '5'},
          headers: {
            'X-RapidAPI-Key': '9ca1b675cbmsh0a118d1e4608e5fp179722jsn09c6585af4f5',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
          }
        })
        console.log(data)
        dispatch(productActions.singleFetch(data));
      } catch (err) {
        console.log(err);
        dispatch(productActions.singleFetchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
}



