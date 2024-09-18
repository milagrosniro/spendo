import { BudgetActions, IBudgetState } from "./budgetReducer.types"

export const initialState :IBudgetState = {
    budget: 0,
    modal: false

}

export const budgetReducer = (state: IBudgetState = initialState, action: BudgetActions) =>{
    switch(action.type){
        case 'add-budget':{
            const {budget} = action.payload
            return {...state, budget}
        };

        case 'show-modal' : {
            console.log('show')
            return{...state, modal: true}
        }

        case 'close-modal' : {
            return{...state, modal: false}
        }

        default : return state

    }

}