import { configureStore } from "@reduxjs/toolkit";
import UserAuthReducer from "./features/userAuthSlice"; 

const store = configureStore({
    reducer: {
        auth: UserAuthReducer
    }
})

export default store