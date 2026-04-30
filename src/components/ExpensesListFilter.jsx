import React from "react";
import { connect } from "react-redux";
import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
} from "../actions/filters.jsx";
import { DateRangePicker } from "react-dates";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import moment from "moment";

const ExpenseListFilters = (props) => {
    let [calendarFocused, setCalendarFocused] = useState(null);
    const datePickerIds = useRef({
        startDateId: uuid(),
        endDateId: uuid(),
    });

    const onDatesChange = ({ startDate, endDate }) => {
        props.dispatch(setStartDate(startDate));
        props.dispatch(setEndDate(endDate));
    };
    const onFocusChange = (calendarFocused) => {
        setCalendarFocused(calendarFocused);
    };

    const clearFilters = () => {
        props.dispatch(setTextFilter(""));
        props.dispatch(sortByDate());
        props.dispatch(setStartDate(null));
        props.dispatch(setEndDate(null));
    };

    const setQuickRange = (days) => {
        const end = moment().endOf("day");
        const start = moment().subtract(days - 1, "days").startOf("day");
        props.dispatch(setStartDate(start));
        props.dispatch(setEndDate(end));
    };

    const isQuickRangeActive = (days) => {
        if (!props.filters.startDate || !props.filters.endDate) {
            return false;
        }

        const expectedEnd = moment().endOf("day");
        const expectedStart = moment()
            .subtract(days - 1, "days")
            .startOf("day");

        return (
            props.filters.startDate.isSame(expectedStart, "day") &&
            props.filters.endDate.isSame(expectedEnd, "day")
        );
    };

    return (
        <section className="card filters">
            <div className="filters__head">
                <div>
                    <p className="filters__eyebrow">Find Expenses</p>
                    <h3 className="filters__title">Filter your records</h3>
                </div>
                <button className="btn btn--ghost" onClick={clearFilters} type="button">
                    Clear filters
                </button>
            </div>
            <div className="filters__row">
                <div className="field">
                    <label className="field__label">Search</label>
                    <input
                        className="field__control"
                        type="text"
                        placeholder="Search by description"
                        value={props.filters.text}
                        onChange={(e) => {
                            props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                </div>
                <div className="field">
                    <label className="field__label">Sort By</label>
                    <div className="sort-toggle" role="group" aria-label="Sort expenses">
                        <button
                            className={
                                props.filters.sortBy === "date"
                                    ? "sort-toggle__btn is-active"
                                    : "sort-toggle__btn"
                            }
                            type="button"
                            onClick={() => props.dispatch(sortByDate())}
                        >
                            Date
                        </button>
                        <button
                            className={
                                props.filters.sortBy === "amount"
                                    ? "sort-toggle__btn is-active"
                                    : "sort-toggle__btn"
                            }
                            type="button"
                            onClick={() => props.dispatch(sortByAmount())}
                        >
                            Amount
                        </button>
                    </div>
                </div>
                <div className="field field--calendar">
                    <label className="field__label">Date Range</label>
                    <div className="date-range-panel">
                        <DateRangePicker
                            startDate={props.filters.startDate}
                            startDateId={datePickerIds.current.startDateId}
                            endDate={props.filters.endDate}
                            endDateId={datePickerIds.current.endDateId}
                            onDatesChange={onDatesChange}
                            focusedInput={calendarFocused}
                            onFocusChange={onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                        <div className="quick-ranges" role="group" aria-label="Quick date ranges">
                            <button
                                className={
                                    isQuickRangeActive(7)
                                        ? "quick-ranges__chip is-active"
                                        : "quick-ranges__chip"
                                }
                                type="button"
                                onClick={() => setQuickRange(7)}
                            >
                                Last 7 days
                            </button>
                            <button
                                className={
                                    isQuickRangeActive(30)
                                        ? "quick-ranges__chip is-active"
                                        : "quick-ranges__chip"
                                }
                                type="button"
                                onClick={() => setQuickRange(30)}
                            >
                                Last 30 days
                            </button>
                            <button
                                className="quick-ranges__chip"
                                type="button"
                                onClick={() => {
                                    props.dispatch(setStartDate(null));
                                    props.dispatch(setEndDate(null));
                                }}
                            >
                                Any time
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
