import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import 'numeral/locales/it';

numeral.locale('it');

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('0,0.00 $');

    return (
        <p>Viewing {expensesCount} {expenseWord} totalling {formatedExpensesTotal}</p>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
