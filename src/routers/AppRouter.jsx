import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Header from "../components/Header.jsx"
import ExpenseDashboardPage from "../pages/ExpenseDashboardPage.jsx"
import AddExpensePage from "../pages/AddExpensePage.jsx"
import ExpenseDetailsPage from "../pages/ExpenseDetailsPage.jsx"
import EditExpensePage from "../pages/EditExpensePage.jsx"
import HelpExpensePage from "../pages/HelpExpensePage.jsx"
import NotFoundPage from "../pages/NotFoundPage.jsx"

const AppRouter = () => (
  <BrowserRouter>
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ExpenseDashboardPage />} />
          <Route path="create" element={<AddExpensePage />} />
          <Route path="expense/:id" element={<ExpenseDetailsPage />} />
          <Route path="edit/:id" element={<EditExpensePage />} />
          <Route path="help" element={<HelpExpensePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
)

export default AppRouter
