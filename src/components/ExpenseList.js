import React from 'react';
import {connect} from 'react-redux';    //STORE CONNECTOR
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} /> )}
    </div>
);


//THE FOLLOWING PULLS IN THE STATE FROM THE STORE AND CONNECTS IT TO THIS COMPONENT
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
