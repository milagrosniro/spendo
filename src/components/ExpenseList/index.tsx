import { useMemo } from "react";
import { useBudget } from "../../hooks/useBudget";
import ExpenseDetail from "../ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();
  const { expenses, currentCategory } = state;

  const filteredExpenses = currentCategory
    ? expenses.filter((exp) => exp.category === currentCategory)
    : expenses;
  const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses]);

  return (
    <div className=" mt-10 bg-white shadow-lg rounded-lg p-5">
      {isEmpty ? (
        <p className=" text-gray-600 text-2xl font-bold">No expenses</p>
      ) : (
        <>
          <p className=" text-gray-600 text-2xl font-bold my-5">Expense list</p>
          {filteredExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
