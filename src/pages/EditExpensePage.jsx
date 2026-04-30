import React from "react";

// Hooks imports =>
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { editExpense, removeExpense } from "../actions/expenses.jsx";
import ExpenseForm from "../components/ExpenseForm.jsx";

const EditExpensePage = () => {
    let { id } = useParams();
    const expenses = useSelector((state) => state.expenses);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const expense = expenses.find((expense) => expense.id === id);

    return (
        <div className="page page--form">
            <section className="hero hero--compact">
                <p className="hero__eyebrow">Update Entry</p>
                <h2 className="hero__title">Edit expense</h2>
            </section>
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    dispatch(editExpense(id, expense));
                    navigate("/");
                }}
            />
            <button
                className="btn btn--danger"
                onClick={() => {
                    dispatch(removeExpense({ id, expense }));
                    navigate("/");
                }}
            >
                Remove
            </button>
        </div>
    );
};

// const mapStateToProps = (state, props) => {
//     return {
//         expense: state.expenses.find((expense) => expense.id === id),
//     };
// };

export default EditExpensePage;
