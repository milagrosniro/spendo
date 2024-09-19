import { createContext, useMemo, useReducer } from "react";
import { Expense } from "../components/ExpenseForm/expenseForm.types";
import { budgetReducer, initialState } from "../reducers/budgetReducer";
import { IBudgetContextProps, IBudgetProviderProps } from "./budgetContext.type";

export const BudgetContext = createContext<IBudgetContextProps>({} as IBudgetContextProps)

export const BudgetProvider = ({children}: IBudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);
    const {expenses, budget} = state

    const totalExpenses = useMemo(()=> expenses.reduce((acc: number ,current: Expense)=> current.amount + acc,0)
    ,[expenses])
    const remainingBudget = useMemo(()=>budget - totalExpenses,[totalExpenses, budget])

    return <BudgetContext.Provider value={{
        state,
        dispatch,
        totalExpenses,
        remainingBudget
    }}>
        {children}
    </BudgetContext.Provider>
}