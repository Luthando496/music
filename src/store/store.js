import {createSlice,configureStore} from '@reduxjs/toolkit'



const productSlice = createSlice({
    name: 'product',
    initialState: {products: [] ,loading: true,err:null,singlePro:null,singleError:null,searchedItem:null},
    reducers:{
        fetchProducts(state,action){
            state.loading = true;
            state.products = action.payload
            state.loading = false;
        },
        fetchProductsError(state,action){
            state.err = action.payload;
            state.loading = false;
        },
        singleFetch(state,action){
            state.loading = true;
            state.singlePro = action.payload;
            state.loading = false;
            state.singleError = null;
        },
        singleFetchError(state,action){
            state.loading = true;
            state.singleError = action.payload;
            state.loading = false;
        },
        productSearch(state,action){
            state.loading = true;
            state.searchedItem = action.payload
            state.loading = false
        },
        productSearchError(state,action){
            state.loading = true;
            state.err = action.payload;
            state.searchedItem = null;
            state.loading = false;
        }

    }
    
})

export const productActions = productSlice.actions




const store = configureStore({
    reducer: {
        product: productSlice.reducer
    }
})


export default store