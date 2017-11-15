import {createStore} from 'redux';

//ACTION GENERATORS
const incrementCount = ({incrementBy = 1} = {}) => ({           //Destructuring and setting default
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});


//REDUCER
const countReducer = (state = {count: 0}, action) => {         //Default state is set in the inner function's parameter
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
};

const store = createStore(countReducer);


//SUBSCRIBE - Returns the state of the store each time it changes. Calling unsubscribe stops the function.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



//ACTIONS - Objects that get sent to the store

//Increment the count

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 10 }));


//Decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));



//Reset the count
store.dispatch(resetCount());


//Set a value
store.dispatch(setCount({ count: 101 }));
