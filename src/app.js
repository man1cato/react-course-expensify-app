import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//DISPATCHES
store.dispatch(addExpense({description: 'water bill', amount: 8500, createdAt: -3498234}));
store.dispatch(addExpense({description: 'gas bill', amount: 6000,createdAt: 12383342}));
store.dispatch(addExpense({description: 'rent', amount: 75000}));


//LOG RESULTS
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//PROVIDE STORE TO COMPONENTS
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));