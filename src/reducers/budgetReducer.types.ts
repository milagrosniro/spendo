export type BudgetActions = 
    {type:'add-budget', payload:{budget:number}} |
    {type:'show-modal'} |
    {type:'close-modal'} 

export interface IBudgetState {
        budget: number,
        modal: boolean

    }