import { IErrorMsgProps } from "./errorMsg.types"

const ErrorMsg = ({children}: IErrorMsgProps) => {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">{children}</p>
  )
}

export default ErrorMsg