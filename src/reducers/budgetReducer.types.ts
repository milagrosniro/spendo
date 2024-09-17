export type BudgetActions = 
    {type:'add-budget', payload:{budget:number}}

export interface IBudgetState {
        budget: number

    }