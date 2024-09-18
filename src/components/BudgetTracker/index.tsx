import AmountDisplay from "../AmountDisplay";

const BudgetTracker = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className=" flex justify-center">
        <img src="/grafico.jpg" alt="graph" />
      </div>

      <div className=" flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Reseat App
        </button>

        <AmountDisplay label="Budget" amount={300} />

        <AmountDisplay label="Available Balance" amount={100} />

        <AmountDisplay label="Amount Spent" amount={200} />
      </div>
    </div>
  );
};

export default BudgetTracker;
