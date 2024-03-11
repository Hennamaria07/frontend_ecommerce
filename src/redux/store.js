import { configureStore } from "@reduxjs/toolkit";
import UserAuthReducer from "./features/userAuthSlice"; 
import themeSlice from "./features/themeSlice";
import productSlice from "./features/productSlice";

const store = configureStore({
    reducer: {
        auth: UserAuthReducer,
        mode: themeSlice,
        products: productSlice
    }
})

export default store