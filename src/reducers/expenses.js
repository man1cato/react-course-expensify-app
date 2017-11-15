//EXPENSES REDUCER
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];      ///... operator injects all the values from the named array
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id); 
        case 'EDIT_EXPENSE':
            return state.map((expense) => expense.id === action.id ? {...expense, ...action.updates} : expense);
        default:
            return state;
    }
};

export default expensesReducer;