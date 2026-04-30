import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const ExpenseDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const expense = useSelector((state) => state.expenses.find((item) => item.id === id));

    if (!expense) {
        return (
            <section className="page page--info">
                <article className="card info-card">
                    <h2>Expense not found</h2>
                    <p>The expense you selected no longer exists.</p>
                    <button className="btn btn--primary" onClick={() => navigate("/")}>Back to dashboard</button>
                </article>
            </section>
        );
    }

    return (
        <section className="page page--info">
            <div className="hero hero--compact">
                <p className="hero__eyebrow">Expense Details</p>
                <h1 className="hero__title">{expense.description}</h1>
                <p className="hero__subtitle">View the full breakdown of this expense record.</p>
            </div>

            <article className="card info-card expense-details">
                <div className="expense-details__summary">
                    <div>
                        <p className="expense-details__label">Amount</p>
                        <p className="expense-details__amount">${(expense.amount / 100).toFixed(2)}</p>
                    </div>
                    <div>
                        <p className="expense-details__label">Date</p>
                        <p className="expense-details__value">{moment(expense.createdAt).format("MMMM D, YYYY")}</p>
                    </div>
                </div>

                <div>
                    <p className="expense-details__label">Description</p>
                    <p className="expense-details__value">{expense.description}</p>
                </div>

                <div>
                    <p className="expense-details__label">Notes</p>
                    <p className="expense-details__value">{expense.note ? expense.note : "No notes were added for this expense."}</p>
                </div>

                <div className="expense-details__actions">
                    <Link className="btn btn--primary" to={`/edit/${expense.id}`}>
                        Edit expense
                    </Link>
                    <Link className="btn btn--ghost" to="/">
                        Back to dashboard
                    </Link>
                </div>
            </article>
        </section>
    );
};

export default ExpenseDetailsPage;
