const getExpensesTotal = (expenses) => {
    return expenses
        .map( (expense) =>  expense.amount )            //extract amounts and turn into array
        .reduce( (sum, value) => sum + value, 0);       //sum up all amount values in array and return value
};

export default getExpensesTotal;