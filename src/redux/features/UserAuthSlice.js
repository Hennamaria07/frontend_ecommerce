import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null
}

const UserAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        userAuth: (state, action) => {
            state.user = action.payload.user,
            state.isAuthenticated = action.payload.isAuthenticated,
            state.token = action.payload.token
        }
    }
});

export const {userAuth} = UserAuthSlice.actions;
export default UserAuthSlice.reducer;