import { createContext, useMemo, useReducer } from "react";
import { budgetReducer, initialState } from "../reducers/budgetReducer";
import { IBudgetContextProps, IBudgetProviderProps } from "./budgetContext.type";

export const BudgetContext = createContext<IBudgetContextProps>({} as IBudgetContextProps)

export const BudgetProvider = ({children}: IBudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    const {expenses, budget} = state

    const totalExpenses = useMemo(()=> expenses.reduce((acc,current)=> current.amount + acc,0)
    ,[expenses])
    const remainingBudget = useMemo(()=>budget - totalExpenses,[expenses])

    return <BudgetContext.Provider value={{
        state,
        dispatch,
        totalExpenses,
        remainingBudget
    }}>
        {children}
    </BudgetContext.Provider>
}