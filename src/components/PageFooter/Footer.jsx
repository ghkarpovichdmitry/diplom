import React from 'react';
import classes from "classnames";
import cl from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer id="page-footer" className={cl.footer}>
            <div className={classes("container", cl.container)}>
                Footer
            </div>
        </footer>
    );
};

export default Footer;