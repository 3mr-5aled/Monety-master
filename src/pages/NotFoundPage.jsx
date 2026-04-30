import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <section className="page page--info">
    <article className="card info-card">
      <h2>404</h2>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn btn--primary" to="/">
        Back to dashboard
      </Link>
    </article>
  </section>
)

export default NotFoundPage
