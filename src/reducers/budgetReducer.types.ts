import { DraftExpense, Expense } from "../components/ExpenseForm/expenseForm.types"

export type BudgetActions = 
    {type:'add-budget', payload:{budget:number}} |
    {type:'show-modal'} |
    {type:'close-modal'} |
    {type:'add-expense', payload:{expense: DraftExpense}} |
    {type:'delete-expense', payload:{id: Expense['id']}} |
    {type:'update-expense', payload:{expense: Expense}} |
    {type:'get-expense-by-id', payload:{id: Expense['id']}} 


export interface IBudgetState {
        budget: number,
        modal: boolean,
        expenses: Expense[],
        editingId: Expense['id']
    }