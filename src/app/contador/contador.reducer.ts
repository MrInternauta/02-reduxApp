import * as actions from './contador.actions';

export const initialState = 0;

// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

export function counterReducer(state: number = 0, action: actions.newActions) {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    case actions.RESET:
      return (state = 0);
    case actions.MUL:
      return state * action.payload;
    case actions.DIV:
      return state / action.payload;
    default:
      return state;
  }
  //return _counterReducer(state, action);
}
