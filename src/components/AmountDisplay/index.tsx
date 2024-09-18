import { formatCurrency } from "../../helpers"
import { IAmountDisplayProps } from "./amountDisplay.types"

const AmountDisplay = ({amount, label}: IAmountDisplayProps) => {
  return (
    <p className=" text-2xl text-blue-600 font-bold">
        {`${label}: `}

        <span className=" font-black text-black">{formatCurrency(amount)}</span>

    </p>
  )
}

export default AmountDisplay