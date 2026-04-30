import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ExpensesListItem = ({ id, description, amount, createdAt }) => (
    <Link className="expense-row" to={`/expense/${id}`}>
        <div>
            <h4 className="expense-row__title">{description}</h4>
            <p className="expense-row__date">{moment(createdAt).format("MMM D, YYYY")}</p>
        </div>
        <p className="expense-row__amount">${(amount / 100).toFixed(2)}</p>
    </Link>
);

export default ExpensesListItem;
