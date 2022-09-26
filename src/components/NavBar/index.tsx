import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

const NavBar = () => {
  return (
    <header className={classes.navbar}>
      <h1>GitIt</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/something">About Us</NavLink>
        </li>
        <li>
          <a
            href="https://github.com/abdulkarimogaji/assessment-gitit"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
