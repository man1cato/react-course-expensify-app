import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('should setup add expense action object with default values', () => {
    const expenseData = { 
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = { 
        description: 'Rent', 
        note: 'Jan rent', 
        amount: 120000, 
        createdAt: 123456789
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup edit expense action object',() => {
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'new note value'}
    });
});

test('should setup remove expense action object',() => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});