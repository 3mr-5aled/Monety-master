import React from "react";
import ExpenseList from "../components/ExpensesList.jsx";
import ExpensesListFilter from "../components/ExpensesListFilter.jsx";

const ExpenseDashboardPage = () => (
    <div className="page page--dashboard">
        <section className="hero">
            <p className="hero__eyebrow">Overview</p>
            <h2 className="hero__title">Track your spending with clarity</h2>
            <p className="hero__subtitle">
                Filter by date or amount and keep every expense in one place.
            </p>
        </section>
        <ExpensesListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
