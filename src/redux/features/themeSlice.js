import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: 'light',
    show: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      getTheme: (state, action) => {
        state.theme = action.payload.theme;
      },
      Getvisibility: (state, action) => {
        state.show = action.payload.show;
      }
    }
  });
export const {getTheme, Getvisibility} = themeSlice.actions;
export default themeSlice.reducer;