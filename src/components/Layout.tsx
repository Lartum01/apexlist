import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header className="site-header">
        <NavLink to="/" className="brand">
          PA List
        </NavLink>
        <nav className="primary-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/global">Global Leaderboard</NavLink>
          <NavLink className="submit-nav-link" to="/submit">
            Submit a Time
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">The World Record is the fastest submitted lap.</footer>
    </div>
  );
}
