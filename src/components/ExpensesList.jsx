import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpensesListItem.jsx";
import selectExpenses from "../selectors/expenses.jsx";

const ExpenseList = (props) => (
    <section className="card expenses">
        <div className="expenses__header">
            <h3 className="expenses__title">Expense List</h3>
            <p className="expenses__count">{props.expenses.length} items</p>
        </div>
        <div className="expenses__list">
            {props.expenses.length === 0 && (
                <p className="expenses__empty">No expenses matched your filters.</p>
            )}
            {props.expenses.map((expense) => {
                return <ExpenseItem key={expense.id} {...expense} />;
            })}
        </div>
    </section>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);
