import { configureStore } from "@reduxjs/toolkit";
import UserAuthReducer from "./features/userAuthSlice"; 
import themeSlice from "./features/themeSlice";

const store = configureStore({
    reducer: {
        auth: UserAuthReducer,
        mode: themeSlice
    }
})

export default store