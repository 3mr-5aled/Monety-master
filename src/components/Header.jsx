import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header className="topbar">
        <div className="topbar__inner">
            <h1 className="brand">Monety</h1>
            <nav className="topnav">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "topnav__link is-active" : "topnav__link"
                    }
                    end
                    to="/"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "topnav__link is-active"
                            : "topnav__link"
                    }
                    to="create"
                >
                    Create Expense
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "topnav__link is-active"
                            : "topnav__link"
                    }
                    to="help"
                >
                    Help
                </NavLink>
            </nav>
        </div>
    </header>
);

export default Header;
