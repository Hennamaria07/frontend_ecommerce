import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenicated: false,
    token: null
}

const UserAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        userAuth: (state, action) => {
            state.user = action.payload.user,
            state.isAuthenicated = action.payload.user,
            state.token = action.payload.token
        }
    }
});

export const {userAuth} = UserAuthSlice.actions;
export default UserAuthSlice.reducer;