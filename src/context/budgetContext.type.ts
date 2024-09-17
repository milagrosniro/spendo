import { Dispatch, ReactNode } from "react";
import { BudgetActions, IBudgetState } from "../reducers/budgetReducer.types";

export interface IBudgetContextProps{
    state: IBudgetState ;
    dispatch: Dispatch<BudgetActions>
} 

export interface IBudgetProviderProps{
    children: ReactNode
}