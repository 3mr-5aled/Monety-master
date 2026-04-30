import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm.jsx";
import { addExpense } from "../actions/expenses.jsx";
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
    const navigate = useNavigate();
    return (
        <div className="page page--form">
            <section className="hero hero--compact">
                <p className="hero__eyebrow">New Entry</p>
                <h2 className="hero__title">Add expense</h2>
            </section>
<div className="center">

            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    navigate("/");
                }}
                />
                </div>
        </div>
    );
};

export default connect()(AddExpensePage);
