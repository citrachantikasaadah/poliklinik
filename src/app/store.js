import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../pages/cms/features/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});