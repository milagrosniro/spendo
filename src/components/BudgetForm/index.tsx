import { useMemo, useState } from "react";
import { useBudget } from "../../hooks/useBudget";

const BudgetForm = () => {
    const [budget, setBudget] = useState<number>(0);

    const {dispatch} = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setBudget(+e.target.value)
    };
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        dispatch({type:'add-budget', payload:{budget}})


    }

    const isValid = useMemo(()=>budget > 0 || isNaN(budget) ,[budget])

  return (
    <form className=" space-y-5"
    onSubmit={handleSubmit}>
        <div className=" flex flex-col space-y-5">
            <label htmlFor="budget" className=" text-4xl text-blue-600 font-bold text-center"> Set a Budget</label>

        </div>

        <input
        id='budgetID'
        type="number"
        className=" w-full bg-white border border-gray-200 p-2"
        placeholder="Set your budget"
        name="budget"
        value={budget}
        onChange={handleChange}
        />

        <input
        type="submit"
        className=" bg-blue-600 hover:bg-blue-700 p-2 cursor-pointer w-full text-white font-black uppercase disabled:opacity-40"
        value="Set Budget"
        disabled={!isValid}
        
        />

    </form>
  )
}

export default BudgetForm