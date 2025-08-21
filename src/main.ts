// TYPES
type ActionType = "increment" | "decrement";
type Action = { type: ActionType; payload: number };
type State = { count: number };
type Reducer = (prevState: State, action: Action) => State;
type Listener = () => void;
// CODE

function createStore(reducer: Reducer, initialState: State) {
  let state: State = initialState;
  let checker: boolean = false;
  return {
    dispatch(action: Action) {
      state = reducer(state, action);
      checker = true;
    },
    getState() {
      return state;
    },
    subscribe(listener: Listener) {
      if (checker) {
        listener();
        checker = false;
      }
    },
  };
}

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return { ...state };
  }
};

const { getState, dispatch, subscribe } = createStore(reducer, { count: 0 });

subscribe(() => {
  console.log("state = ", getState());
});
/**
 * state = { count: 2 }
 * state = { count: 7 }
 * state = { count: 3 }
 */
dispatch({ type: "increment", payload: 2 });
dispatch({ type: "increment", payload: 5 });
dispatch({ type: "decrement", payload: 4 });
subscribe(() => {
  console.log("state = ", getState());
});
