import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice';
import likeSlice from './reducers/likeSlice';
import themeSlice from './reducers/themeSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    like: likeSlice,
    theme: themeSlice,
  },
});

console.log('STATE_AWAL :' + JSON.stringify(store.getState()));

store.subscribe(() => {
  console.log('perubahan pada store : ' + JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
