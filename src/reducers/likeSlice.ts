import {createSlice} from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'like',
  initialState: {
    data: [],
  },
  reducers: {
    addTolike: (state, action: any) => {
      const itemIndex = state.data.findIndex(
        (item: any) => item.id === action.payload.id,
      );

      if (itemIndex >= 0) {
        state.data.splice(itemIndex, 1);
      } else {
        //@ts-ignore
        state.data.push(action?.payload);
      }
    },
  },
});

export const {addTolike} = likeSlice.actions;
export default likeSlice.reducer;
