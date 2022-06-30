import {Nav, Navbar} from 'react-bootstrap';
import classes from './../styles/NavBar.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({onNavLinkClick}){

    return(
        <Navbar sticky="top" expand="lg" collapseOnSelect className={classes.nav}>
            <Navbar.Brand className={classes.nav__brand} >
                <div onClick={() => onNavLinkClick("landing")}><h4 className={classes.nav__brand__icon}>taberu</h4></div>{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse >
                <Nav className={classes.nav__linkList}>
                    <div onClick={() => onNavLinkClick("recipes")} ><h4 className={classes.nav__linkList__link}>today's recipe</h4></div>
                    <div onClick={() => onNavLinkClick("about")}><h4 className={classes.nav__linkList__link}>about us</h4></div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;