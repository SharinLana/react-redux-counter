import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./index";

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
