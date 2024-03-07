import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./features/userAuthSlice"; 

const store = configureStore({
    reducer: {
        auth: userAuthSlice
    }
})

export default store