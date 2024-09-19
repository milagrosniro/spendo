import { Expense } from "../components/ExpenseForm/expenseForm.types";

export const formatCurrency = (amount: number) => new Intl.NumberFormat('en-us', {style:'currency', currency:'USD'}).format(amount)

export const formatDate = (date: string) : string =>{
    const dateObj = new Date(date);
    const options : Intl.DateTimeFormatOptions =  {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}

export const initialBudget = ():number =>{
    const localStorageBudget = localStorage.getItem('budget')
    return localStorageBudget ? +localStorageBudget : 0
    }

export const localStorageExpenses = ():Expense[] =>{
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
    }