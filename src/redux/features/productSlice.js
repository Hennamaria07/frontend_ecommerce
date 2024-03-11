import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProductLists: (state, action) => {
            state.products = action.payload.products
        }
    }
})

export const {getProductLists} = productSlice.actions;
export default productSlice.reducer;