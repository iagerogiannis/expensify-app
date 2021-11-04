import moment from 'moment';

export default [{
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}, {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}, {
    text: 'Gum',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}];
