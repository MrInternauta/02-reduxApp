import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './contador.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function counterReducer(state: any, action: Action) {
    switch (action.type) {
        case increment.type:
            return state + 1;
        case decrement.type:
            return state -1;
        default:
            return state;
            break;
    }
  //return _counterReducer(state, action);
}