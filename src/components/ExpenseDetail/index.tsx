import { useMemo } from "react";
import {
  LeadingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { categories } from "../../data/categories";
import { formatDate } from "../../helpers";
import { useBudget } from "../../hooks/useBudget.ts";
import AmountDisplay from "../AmountDisplay";
import { IExpenseDetailProps } from "./expenseDetail.types.ts";

const ExpenseDetail = ({ expense }: IExpenseDetailProps) => {

  const categoryInfo = useMemo(
    () => categories.find((c) => c.id === expense.category),
    [expense]
  );

  const {dispatch} = useBudget();

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type:'get-expense-by-id', payload:{id: expense.id}})}>Upload</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
      onClick={() => dispatch({type:'delete-expense', payload:{id:expense.id}})}
      destructive={true}
      >Delete</SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={1}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className=" bg-white shadow-lg p-10 w-full boder-b border-gray-200 flex gap-5 items-center">
          <div>
            <img
              src={`/icono_${categoryInfo?.icon}.svg`}
              alt="icon expense"
              className=" w-20"
            />
          </div>

          <div className=" flex-1 space-y-2">
            <p className=" text-sm font-bold uppercase text-slate-500">
              {categoryInfo?.name}
            </p>
            <p>{expense.expenseName}</p>
            <p className=" text-slate-600 text-sm">
              {formatDate(expense.date!.toString())}
            </p>
          </div>

          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseDetail;
