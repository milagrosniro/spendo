import { useMemo } from 'react';
import "react-circular-progressbar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useBudget } from "../../hooks/useBudget";
import AmountDisplay from "../AmountDisplay";

const BudgetTracker = () => {

  const {state, totalExpenses, remainingBudget, dispatch} = useBudget();
  const {budget} = state;

  const percentage = useMemo(() => +((totalExpenses / budget)*100).toFixed(2),[budget, totalExpenses])

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=" flex justify-center">
        <CircularProgressbar 
        value={percentage}
        styles={buildStyles({
          pathColor: percentage === 100 ? '#DC2626' :'#3b82f6',
          trailColor: '#F5F5F5',
          textSize: 8,
          textColor: percentage === 100 ? '#DC2626' :'#3b82f6',
        })}
        text={`${percentage} % spent`}
        />
      </div> 

      <div className=" flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={()=> dispatch({type:'reset'})}
        >
          Reset App
        </button>

        <AmountDisplay label="Budget" amount={budget} />

        <AmountDisplay label="Remaining Budget" amount={remainingBudget} />

        <AmountDisplay label="Total Expenses" amount={totalExpenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;
