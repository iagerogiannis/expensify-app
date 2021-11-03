import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense = {expenses[0]}
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpenseSpy).toHaveBeenCalledWith(expenses[0].id, expenses[1]);
    expect(historySpy.push).toHaveBeenCalledWith('/');
});

test('should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenCalledWith(expenses[0].id);
    expect(historySpy.push).toHaveBeenCalledWith('/');
});
