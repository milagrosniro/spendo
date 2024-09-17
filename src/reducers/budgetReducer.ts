import { BudgetActions, IBudgetState } from "./budgetReducer.types"

export const initialState :IBudgetState = {
    budget: 0

}

export const budgetReducer = (state: IBudgetState = initialState, action: BudgetActions) =>{
    switch(action.type){
        case 'add-budget':{
            const {budget} = action.payload
            return {...state, budget}

        };

        default : return state

    }

}