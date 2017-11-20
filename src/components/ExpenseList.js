import React from 'react';
import {connect} from 'react-redux';    //STORE CONNECTOR
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} /> )
            )
        }
    </div>
);


//THE FOLLOWING PULLS IN THE STATE FROM THE STORE AND CONNECTS IT TO THIS COMPONENT
const mapStateToProps = (state) => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpenseList);
