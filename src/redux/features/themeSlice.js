import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      getTheme: (state, action) => {
        state.theme = action.payload.theme;
      }
    }
  });
export const {getTheme} = themeSlice.actions;
export default themeSlice.reducer;