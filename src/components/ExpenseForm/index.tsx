import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { categories } from "../../data/categories";
import { useBudget } from "../../hooks/useBudget";
import ErrorMsg from "../ErrorMsg";
import { DraftExpense, Value } from "./expenseForm.types";

const ExpenseForm = () => {
  const initialStateExpense : DraftExpense = {
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  }

  const [expense, setExpense] = useState<DraftExpense>(initialStateExpense);

  const[error, setError] = useState<string>('');

  const { amount, expenseName, category, date } = expense;

  const {dispatch, state} = useBudget();

useEffect(()=>{
  if(state.editingId){
    const editingExpense = state.expenses.find(exp => exp.id === state.editingId)
    if(editingExpense) setExpense(editingExpense)
  }
},[state.editingId])


  const handleChangeDate = (value: Value) => {
    setExpense({...expense, date: value})}
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => { 
    const {name, value} = e.target;
    const isAmountField = ['amount'].includes(name);
    return isAmountField ? setExpense({...expense, [name] : +value}) : setExpense({...expense, [name] : value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();

      const isFormComplete = !Object.values(expense).includes('') && !Object.values(expense).includes(0) ;

      if(!isFormComplete){
        setError('All fields are required')
      } else {
        setError('');
    
        if(state.editingId){
          dispatch({type:'update-expense', payload: {expense : {id:state.editingId, ...expense}}})
        }else{
          dispatch({type:'add-expense', payload:{expense}})
        }
       
        dispatch({type:'close-modal'});
         setExpense(initialStateExpense)
      }
      
     }

  return (
    <form 
    className=" space-y-5"
    onSubmit={handleSubmit}
    >
      <legend className=" uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        New Expense{" "}
      </legend>

      {error.trim() !== '' && <ErrorMsg>{error}</ErrorMsg>}

      <div className=" flex flex-col gap-2">
        <label htmlFor="expenseName" className=" text-xl">
          Expense Name
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Add Expense Name"
          className=" bg-slate-100 p-2"
          name="expenseName"
          value={expenseName}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col gap-2">
        <label htmlFor="amount" className=" text-xl">
          Expense Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Add Expense Amount. Ex:400"
          className=" bg-slate-100 p-2"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col gap-2">
        <label htmlFor="category" className=" text-xl">
          Category:
        </label>
        <select
          id="category"
          className=" bg-slate-100 p-2"
          name="category"
          value={category}
          onChange={(e)=>handleChange(e)}
          
        >
          <option value='' disabled hidden>--- Select ---</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" flex flex-col gap-2">
        <label htmlFor="date" className=" text-xl">
          Date:
        </label>
        <DatePicker 
        className=" bg-slate-100 p-2 border-0" 
        value={date}
        onChange={handleChangeDate}
         />
      </div>

      <input
        type="submit"
        className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Record Expense"}
      />
    </form>
  );
};

export default ExpenseForm;
