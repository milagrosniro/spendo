import { v4 as uuidV4 } from 'uuid';
import { DraftExpense, Expense } from "../components/ExpenseForm/expenseForm.types";
import { BudgetActions, IBudgetState } from "./budgetReducer.types";

export const initialState :IBudgetState = {
    budget: 0,
    modal: false,
    expenses:[]

}

const createExpense = (draftExpense: DraftExpense) : Expense =>{return {...draftExpense, id: uuidV4()}}

export const budgetReducer = (state: IBudgetState = initialState, action: BudgetActions) =>{
    switch(action.type){
        case 'add-budget':{
            const {budget} = action.payload
            return {...state, budget}
        };

        case 'show-modal' : {
            return{...state, modal: true}
        }

        case 'close-modal' : {
            return{...state, modal: false}
        }

        case 'add-expense' : {
            const expense = createExpense(action.payload.expense)
            return{...state, expenses: [...state.expenses, expense]}
        };

        case 'delete-expense' : {
            const uploadExpenses = state.expenses.filter(exp => exp.id !== action.payload.id)
            return{...state, expenses: uploadExpenses}
        };

        default : return state

    }

}