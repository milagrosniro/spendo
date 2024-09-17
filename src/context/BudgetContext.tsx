import { createContext, useReducer } from "react";
import { budgetReducer, initialState } from "../reducers/budgetReducer";
import { IBudgetContextProps, IBudgetProviderProps } from "./budgetContext.type";


export const BudgetContext = createContext<IBudgetContextProps>({} as IBudgetContextProps)

export const BudgetProvider = ({children}: IBudgetProviderProps) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return <BudgetContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </BudgetContext.Provider>
}