import { createStore } from "redux";

function counterReducer(state = { counter: 0, showCounter: false }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case "decrement":
      if (state.counter === 0) {
        return { counter: (state.counter = 0), showCounter: state.showCounter };
      } else {
        return { counter: state.counter - 1, showCounter: state.showCounter };
      }
    case "increaseByNum":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "toggle":
      return {
        counter: (state.counter = 0),
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
export default store;
