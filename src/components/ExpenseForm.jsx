import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : "",
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            calendarFocused: false,
            error: "",
        };
    }
    onDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = (focused) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                {
                    error: "Please provide description and amount";
                }
            });
        } else {
            this.setState(() => {
                {
                    error: "";
                }
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };
    render() {
        return (
            <section className="card form-card">
                {this.state.error && <p className="form-error">{this.state.error}</p>}
                <form className="expense-form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label className="field__label">Description</label>
                        <input
                            className="field__control"
                            type="text"
                            placeholder="Description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDescription}
                        />
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label className="field__label">Amount</label>
                            <input
                                className="field__control"
                                type="text"
                                placeholder="Amount"
                                value={this.state.amount}
                                onChange={this.onAmountChange}
                            />
                        </div>
                        <div className="field field--calendar">
                            <label className="field__label">Date</label>
                            <SingleDatePicker
                                date={this.state.createdAt}
                                onDateChange={this.onDateChange}
                                focused={this.state.calendarFocused}
                                onFocusChange={this.onFocusChange}
                                numberOfMonths={1}
                                isOutsideRange={() => false}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="field__label">Note</label>
                        <textarea
                            className="field__control field__control--textarea"
                            placeholder="Add a note for your expense"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        ></textarea>
                    </div>
                    <button className="btn btn--primary">
                        {this.props.expense ? "Save Expense" : "Add Expense"}
                    </button>
                </form>
            </section>
        );
    }
}
