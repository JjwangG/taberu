import {Col} from 'react-bootstrap';
import classes from './styles/Landing.module.scss';
import React from 'react';
import { useState } from 'react';
import Filter from './components/Filter';
import icon from './components/searchIcon.svg';
import logo from './components/taberu_logo.svg';

function Landing({englishFlag, onSearchClick, prevFilters,onFilterApply}) {
    const [buttonModal, setModal] = useState(false);

    function filterDialog(){
        setModal(true);
    }

    const getLabel = (elemId) => {
        switch(elemId) {
            case 'search':
                if (englishFlag){ 
                    return "search"
                }
                return "検索する";
                break;
            case 'filter':
                if (englishFlag){ 
                    return "filter"
                }
                return "フィルター";
                break;
            case 'motto':
                if (englishFlag){ 
                    return "a sea of recipes at your fingertips"
                }
                return "ワンクリックであなたの指先でレシピの海";
                break;
        }
        
    } 

    return (
        <div className={classes.main}>
            <Col className ={classes.main__container}>
            <div>
                <img className  ={classes.main__container__img} src={logo} alt="logo" />
            </div>
            <h1 className ={classes.main__container__header}> taberu </h1>
            <div className ={classes.main__container__search}>
                <input onChange={() => console.log('landing')} type="text" placeholder={getLabel("search")} className ={classes.main__container__search__input}/>
                <button type="button" onClick={filterDialog} className ={classes.main__container__search__filter}>{getLabel("filter")}</button>{' '}
                <button type="button" onClick={() => onSearchClick()} className = {classes.main__container__search__btn}>
                    <img src = {icon} alt="" className = {classes.main__container__search__btn__icon}/>
                </button>
            </div>
            <p className ={classes.main__container__text}>{getLabel("motto")}</p>
            <Filter languageFlag={englishFlag} trigger = {buttonModal} setTrigger={setModal} filterList={prevFilters} onApplyClick = {onFilterApply}/>
            </Col>
        </div>
    );
  }
  export default Landing;