import { v4 as uuidV4 } from 'uuid';
import { DraftExpense, Expense } from "../components/ExpenseForm/expenseForm.types";
import { initialBudget, localStorageExpenses } from '../helpers';
import { BudgetActions, IBudgetState } from "./budgetReducer.types";

export const initialState :IBudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses:localStorageExpenses(),
    editingId:'',
    currentCategory: ''
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
            return{...state, 
                modal: false,
                editingId: ''
            }
        }

        case 'add-expense' : {
        
                const expense = createExpense(action.payload.expense)
                return{...state, expenses: [...state.expenses, expense]}
           
        };

        case 'update-expense' : {

                const uploadExpenses = state.expenses.map(exp => exp.id === action.payload.expense.id ? action.payload.expense : exp)
         
                return {
                    ...state, 
                    expenses: uploadExpenses,
                 }
          
        };

        case 'delete-expense' : {
            const uploadExpenses = state.expenses.filter(exp => exp.id !== action.payload.id)
            return{...state, expenses: uploadExpenses}
        };

        case 'get-expense-by-id' : {
            return{
                ...state,
                editingId: action.payload.id,
                modal: true
             }
        };

        case 'reset' : {

            return{
                budget: 0,
                modal: false,
                expenses:[],
                editingId:''
            }
        };

        case 'add-filter-category' : {
            const {id} = action.payload;

            return{
                ...state,
                currentCategory: id
            }
        }

        default : return state

    }

}