import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import {filters} from '../fixtures/filters';


test('should render expenses summary with count and total for a single expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary with count and total for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={7} expensesTotal={51065} />);
    expect(wrapper).toMatchSnapshot();
});