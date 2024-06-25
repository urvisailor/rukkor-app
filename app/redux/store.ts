
import { configureStore } from '@reduxjs/toolkit';
import { profileSlice } from './slice';

export interface RootState {
    profile: import('./slice').State;
}

const store = configureStore<RootState>({
  reducer: {
    profile: profileSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch
export default store;