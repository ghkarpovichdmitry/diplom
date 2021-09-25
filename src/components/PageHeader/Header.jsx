import React from 'react';
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import classes from "classnames";
import cl from "./Header.module.scss";

const Header = () => {
    return (
        <header id="page-header" className={cl.header}>
            <div className={classes(cl.container, "container")}>
                <Link to="/" className={cl.logoBox}>
                    <img src={logo} className={cl.logo} alt="logo"/>
                </Link>
                <nav className={cl.nav}>
                    <ul className={cl.list}>
                        <li className={cl.listItem}>
                            <Link to="/" className={cl.link}>Home</Link>
                        </li>
                        <li className={cl.listItem}>
                            <Link to="/signIg" className={cl.link}>Login</Link>
                        </li>
                        <li className={cl.listItem}>
                            <Link to="/signUp" className={cl.link}>Register</Link>
                        </li>
                        <li className={cl.listItem}>
                            <Link to="/tasks" className={cl.link}>Tasks</Link>
                        </li>
                        <li className={cl.listItem}>
                            <Link to="/users" className={cl.link}>Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;