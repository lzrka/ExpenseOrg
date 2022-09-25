import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const path = window.location.pathname;

function Navbar() {
return <nav className="nav">
<Link to="/" className="site-title">Menu</Link>
<ul>
   <CustomLink to="home">Home</CustomLink>
   <CustomLink to="expenses">Expenses</CustomLink>
   <CustomLink to="login">Login</CustomLink>
</ul>
</nav>
}  
export default Navbar

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path : resolvedPath.pathname, end:true})
return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
    </li>
)
}