import { categories } from "../../data/categories";
import { useBudget } from "../../hooks/useBudget";

const FilterByCategory = () => {

    const {dispatch, state} = useBudget();
    const {currentCategory} = state;

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type:'add-filter-category', payload:{id:e.target.value}})

    }

  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
        <form>
            <div className=" flex flex-col md:flex-row md:items-center gap-5">
                <label>Filter Expenses</label>
                <select 
                id='category'
                className=" bg-slate-100 p-3 flex-1 rounded "
                value={currentCategory}
                onChange={handleOnChange}
                
                >
                    <option value=''>--- All categories ---</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </div>
        </form>
    </div>
  )
}

export default FilterByCategory 