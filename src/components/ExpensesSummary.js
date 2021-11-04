import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import 'numeral/locales/it';

numeral.locale('it');

export const ExpensesSummary = ({ expenses }) => {

    const expenseCount = expenses.length;
    const expensesTotal = getExpensesTotal(expenses);
    const expenseWord = expenses.length === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('0,0.00 $');

    return (
        <p>Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</p>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
