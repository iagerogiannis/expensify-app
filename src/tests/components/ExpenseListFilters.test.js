import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setStartDateSpy, setEndDateSpy, setTextFilterSpy, sortByDateSpy, sortByAmountSpy, wrapper;

beforeEach(() => {
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters = {filters}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
});

test('should handle onDatesChange', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: altFilters.startDate, endDate: altFilters.endDate });
    expect(setStartDateSpy).toHaveBeenCalledWith(altFilters.startDate);
    expect(setEndDateSpy).toHaveBeenCalledWith(altFilters.endDate);
});

test('should handle onTextChange', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilterSpy).toHaveBeenCalledWith(value);
});

test('should handle onSortByChange for sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should handle onSortByChange for sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
