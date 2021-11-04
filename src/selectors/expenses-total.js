export default (expenses) => expenses.reduce((partialSum, expense) => partialSum + expense.amount, 0);
