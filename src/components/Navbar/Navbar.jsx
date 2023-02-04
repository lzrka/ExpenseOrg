import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const path = window.location.pathname;

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
      <div className="container-fluid">
        <div className="nav-left">
        <Link to="/" className="navbar-brand">
          LazarExpenses
        </Link>
        <FontAwesomeIcon icon={faWallet} className="wallet"/>
        </div>

        <ul>
        <li className="nav-item">
            <CustomLink to="home" className="nav-link">Home</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="expenses" className="nav-link">Expenses</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="login" className="nav-link">Login</CustomLink>
          </li>
          <li className="nav-item">
            <CustomLink to="currency" className="nav-link">Currency</CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
