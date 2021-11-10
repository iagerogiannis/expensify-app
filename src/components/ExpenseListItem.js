import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div className="list-item__expense">
            <h3>{description}</h3>
            <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
        </div>
        <h3 className="list-item__amount">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default ExpenseListItem;
