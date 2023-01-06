import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter === 0) {
        state.counter = 0;
      } else {
        state.counter--;
      }
    },
    increaseByNum(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
