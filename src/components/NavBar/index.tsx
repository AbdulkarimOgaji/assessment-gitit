import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [shadow, setShadow] = useState({});

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 10) {
        setShadow({ boxShadow: "none" });
      } else {
        setShadow({});
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className={classes.navbar} style={shadow}>
      <h1>GitIt</h1>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
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
