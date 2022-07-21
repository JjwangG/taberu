import {Nav, Navbar} from 'react-bootstrap';
import classes from './../styles/NavBar.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({onNavLinkClick, englishFlag, onLanguageBtnToggle}){
    const getLabel = (elemId) => {
        switch(elemId) {
            case 'recipes':
                if (englishFlag){ 
                    return "recipes"
                }
                return "今日のレシピ";
                break;
            case 'about':
                if (englishFlag){ 
                    return "about us"
                }
                return "およそ";
                break;
            case 'language':
                if (englishFlag){ 
                    return "日本"
                }
                return "english";
                break;
        }
        
    } 

    return(
        <Navbar sticky="top" expand="lg" collapseOnSelect className={classes.nav}>
            <Navbar.Brand className={classes.nav__brand} >
                <div onClick={() => onNavLinkClick("landing")}><h4 className={classes.nav__brand__icon}>taberu</h4></div>{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse >
                <Nav className={classes.nav__linkList}>
                    <div onClick={() => onNavLinkClick("recipes")} ><h4 className={classes.nav__linkList__link}>{getLabel("recipes")}</h4></div>
                    <div onClick={() => onNavLinkClick("about")}><h4 className={classes.nav__linkList__link}>{getLabel("about")}</h4></div>
                    <div onClick={() => onLanguageBtnToggle()} title="This only works on the landing page, filter modal, and navbar">
                        <h4 className={classes.nav__linkList__link}>{getLabel("language")}</h4>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;