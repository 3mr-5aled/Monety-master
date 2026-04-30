import React, { useState } from "react"
import { Link } from "react-router-dom"

const HelpExpensePage = () => {
	const [expandedTechs, setExpandedTechs] = useState({})

	const toggleTech = (techKey) => {
		setExpandedTechs((prev) => ({
			...prev,
			[techKey]: !prev[techKey],
		}))
	}

	const techStack = [
		{
			key: "react",
			title: "React Components",
			short: "Functional components with hooks for state management.",
			details: "Functional components with hooks (useState, useRef) for state management and side effects. Component-based architecture ensures reusability and maintainability. All UI elements are broken down into small, focused components.",
		},
		{
			key: "redux",
			title: "Redux",
			short: "Centralized state container for predictable state management.",
			details: "Predictable state container for centralized state management. All expense and filter data flows through Redux actions and reducers for consistency. This allows easy debugging and time-travel debugging capabilities.",
		},
		{
			key: "router",
			title: "React Router",
			short: "Client-side navigation between pages without reloads.",
			details: "Client-side routing for navigation between Dashboard, Create Expense, Edit Expense, and Help pages without full page reloads. Uses the modern Router API for declarative routing.",
		},
		{
			key: "scss",
			title: "Sass/SCSS",
			short: "Advanced styling with variables and responsive design.",
			details: "Advanced styling with variables, mixins, and nesting. Modern CSS features like custom properties, gradients, and responsive design via media queries. All styles are organized and maintainable.",
		},
		{
			key: "dates",
			title: "Moment.js & React Dates",
			short: "Robust date handling and interactive date picker.",
			details: "Robust date handling and interactive date range picker component for intuitive date filtering. Moment.js provides parsing, validation, and formatting of dates.",
		},
		{
			key: "webpack",
			title: "Webpack & Babel",
			short: "Modern build pipeline with ES6+ transpilation.",
			details: "Modern build pipeline with ES6+ transpilation, code splitting, and optimized production bundles. Webpack handles module bundling and asset management efficiently.",
		},
	]

	return (
	<section className="page page--info">
		<div className="hero hero--compact">
			<p className="hero__eyebrow">Documentation</p>
			<h1 className="hero__title">Welcome to Monety</h1>
			<p className="hero__subtitle">
				A modern expense tracking app built with React and Redux for seamless
				financial management.
			</p>
		</div>

		<div className="help-grid">
			<article className="card info-card">
				<h2>Getting Started</h2>
				<p>
					Monety helps you track and manage your expenses with ease. Start by
					creating expenses, filtering by date or amount, and organizing your
					financial records in one intuitive place.
				</p>
			</article>

			<article className="card info-card">
				<h3>Core Features</h3>
				<ul className="features-list">
					<li>
						<strong>Add & Manage Expenses:</strong> Create, edit, and delete expense
						records with descriptions, amounts, dates, and notes.
					</li>
					<li>
						<strong>Smart Filtering:</strong> Search by description and filter by
						date ranges with quick-select options (Last 7 days, Last 30 days).
					</li>
					<li>
						<strong>Flexible Sorting:</strong> Sort expenses by date or amount to
						organize your data your way.
					</li>
					<li>
						<strong>Real-time Updates:</strong> Redux state management ensures instant
						updates across the entire app.
					</li>
					<li>
						<strong>Responsive Design:</strong> Works seamlessly on desktop and mobile
						devices.
					</li>
				</ul>
			</article>

			<article className="card info-card developer-card">
				<h3>About the Developer</h3>
				<p>
					<strong>3mr5aled</strong> is a full-stack developer passionate about
					building modern, responsive web applications with clean code and great
					user experience.
				</p>
				<p>
					Check out more projects and get in touch on the portfolio:
				</p>
				<a
					href="https://3mr5aled.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn--primary"
				>
					Visit Portfolio
				</a>
				<p className="developer-note">
					Have feedback or found an issue? Feel free to reach out through the
					portfolio contact form!
				</p>
			</article>
		</div>

        <div className="help-grid">
		<article className="card info-card">
			<h3>Technology Stack</h3>
			<p className="tech-intro">
				Monety is built with modern web technologies and best practices:
			</p>
			<div className="tech-grid">
				{techStack.map((tech) => (
                    <div
                    key={tech.key}
                    className={`tech-item ${expandedTechs[tech.key] ? "is-expanded" : ""}`}
					>
						<div
							className="tech-item__header"
							onClick={() => toggleTech(tech.key)}
							role="button"
							tabIndex="0"
							onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
									toggleTech(tech.key)
								}
							}}
                            >
							<h4 className="tech-item__title">{tech.title}</h4>
							<span className="tech-item__toggle" aria-hidden="true">
								{expandedTechs[tech.key] ? "−" : "+"}
							</span>
						</div>
						<p className="tech-item__short">{tech.short}</p>
						{expandedTechs[tech.key] && (
                            <p className="tech-item__details">{tech.details}</p>
						)}
					</div>
				))}
			</div>
		</article>

		<article className="card info-card">
			<h3>How to Use</h3>
			<ol className="help-steps">
				<li>
					<strong>Go to Dashboard:</strong> View all expenses and use filters to
					find what you need.
				</li>
				<li>
					<strong>Create an Expense:</strong> Click "Create Expense" in the
					navigation and fill in the details.
				</li>
				<li>
					<strong>Edit or Delete:</strong> Click on any expense item to edit or
					remove it.
				</li>
				<li>
					<strong>Filter & Sort:</strong> Use the dashboard filters to search by
					description, select a date range, and sort by date or amount.
				</li>
				<li>
					<strong>Clear Filters:</strong> Click "Clear filters" to reset all filter
					criteria and view all expenses.
				</li>
			</ol>
		</article>

                </div>
		<div className="help-cta">
			<Link className="btn btn--primary" to="/">
				Back to Dashboard
			</Link>
		</div>
	</section>
	)
}

export default HelpExpensePage
