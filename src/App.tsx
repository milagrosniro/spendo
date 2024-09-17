import BudgetForm from "./components/BudgetForm";

const App = () => {

 
  return (
    <>
      <header className=" bg-blue-600 py-8 max-h-72">
        <h1 className=" uppercase text-center font-black text-4xl text-white"> SPENDO - Your Budget Planner</h1>
      </header>

      <div className=" w-4/5 max-w 3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm/>
        
      </div>
  </>
  )
}

export default App
