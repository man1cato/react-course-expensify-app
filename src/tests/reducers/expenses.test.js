import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'edhrwg'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '541',
        description: 'Laptop',
        note: '',
        createdAt: 200000,
        amount: 25000
    };
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const amount = 45000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
    const amount = 45000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'sfeggf',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const altExpenses = [{
        id: 4,
        description: 'alt4',
        amount: 40,
        note: '',
        createdAt: 44444
    }, {
        id: 5,
        description: 'alt5',
        amount: 50,
        note: '',
        createdAt: 55555
    }];
    const action = {
        type: 'SET_EXPENSES',
        expenses: altExpenses
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(altExpenses);
});