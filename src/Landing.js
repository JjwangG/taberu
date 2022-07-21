import {Col} from 'react-bootstrap';
import classes from './styles/Landing.module.scss';
import React from 'react';
import { useState } from 'react';
import Filter from './components/Filter';
import icon from './components/searchIcon.svg';

function Landing({onSearchClick, prevFilters,onFilterApply}) {
    const [buttonModal, setModal] = useState(false);

    function filterDialog(){
        setModal(true);
    }

    return (
        <div className={classes.main}>
            <Col className ={classes.main__container}>
            <h1 className ={classes.main__container__header}> taberu </h1>
            <div className ={classes.main__container__search}>
                <input onChange={() => console.log('landing')} type="text" placeholder="search" className ={classes.main__container__search__input}/>
                <button type="button" onClick={filterDialog} className ={classes.main__container__search__filter}>filter</button>{' '}
                <button type="button" onClick={() => onSearchClick()} className = {classes.main__container__search__btn}>
                    <img src = {icon} alt="" className = {classes.main__container__search__btn__icon}/>
                </button>
            </div>
            <p className ={classes.main__container__text}>a sea of recipes at your fingertips</p>
            <Filter trigger = {buttonModal} setTrigger={setModal} filterList={prevFilters} onApplyClick = {onFilterApply}/>
            </Col>
        </div>
    );
  }
  export default Landing;