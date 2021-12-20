import { Action } from '@ngrx/store';
export const INCREMENT = '[Contador] Increment';
export const DECREMENT = '[Contador] Decrement';
export const DIV = '[Contador] Div';
export const MUL = '[Contador] Mul';
export const RESET = '[Contador] Reset';

//Exists 2 ways to create actions in redux
//Option 1
export class IncrementarAction implements Action {
    readonly type: string = INCREMENT;
}

export class DecrementarAction implements Action {
    readonly type: string = DECREMENT;
}

export class DivAction implements Action {
    readonly type: string = DIV;
    constructor(public readonly payload: number){}
}

export class MulAction implements Action {
    readonly type: string = MUL;
    constructor(public readonly payload: number){}
}

export class ResetAction implements Action {
    readonly type: string = RESET;
}


//Option 2
// export const reset = createAction('[Contador] Reset');

export type newAction = IncrementarAction | DecrementarAction | DivAction | MulAction | ResetAction;