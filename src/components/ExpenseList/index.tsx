import { useMemo } from "react";
import { useBudget } from "../../hooks/useBudget";
import ExpenseDetail from "../ExpenseDetail";

const ExpenseList = () => {
    const {state} = useBudget();
    const {expenses} = state

    const isEmpty = useMemo(()=>expenses.length === 0,[expenses])
    
  return (
    <div
    className=" mt-10">{
        isEmpty ? <p className=" text-gray-600 text-2xl font-bold">No expenses</p> :
        <>
        <p className=" text-gray-600 text-2xl font-bold my-5">Expense list</p>
        {expenses.map(expense => <ExpenseDetail key={expense.id} expense={expense}/>)}
        </>
        }</div>
  )
}

export default ExpenseList