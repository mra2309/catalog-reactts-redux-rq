import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    dark: false,
  },
  reducers: {
    switchTheme: state => {
      state.dark = !state.dark; // Toggle the dark mode
    },
  },
});

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;
