import { Modal } from "react-bootstrap";
import classes from './../styles/Filter.module.scss';
import React from 'react';
import { useState} from 'react';

function Filter(props){
    //0 for time -> unlimited
    //second string 
    const [filters, setFilters] = useState(Object.assign({}, props.filterList));

    const [sliderValue, setSlider] = useState(30);
    const handleSlider = (e) => {
        setSlider(e.target.value);
        let temp = Object.assign({}, filters);
        temp.time = e.target.value;
        setFilters(Object.assign({}, temp));
    }

    const onCuisineClick = (cuisineName) =>{
        let temp = Object.assign({}, filters);
        if(cuisineName == 'none'){
            temp.cuisine = '';
        }else{
            temp.cuisine = cuisineName;
        }
        setFilters(Object.assign({}, temp));
    }

    const onMealClick = (mealType) => {
        let temp = Object.assign({}, filters);
        if(mealType == 'none'){
            temp.meal = '';
        }else{
            temp.meal = mealType;
        }
        setFilters(Object.assign({}, temp));
    }

    return(
        <Modal show={props.trigger} onHide={() => props.setTrigger(false)} className={classes.modal}>
            <Modal.Header closeButton className={classes.modal__header}>
                <Modal.Title className={classes.modal__header__title}>Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modal__body}>
                <div>
                    <h2 className={classes.modal__body__header}>time to prepare: </h2>
                    <input type="range" id="slider" className={classes.modal__body__slider} 
                        value={sliderValue} min="0" max="60" onChange={handleSlider}/>{' '}
                    <p className={classes.modal__body__p}>range: 0 - {sliderValue} hr</p>
                    {sliderValue == 0 && <p className={classes.modal__body__p2}>you have indicated you have no time preference</p>}
                    <br/>
                    <h2 className={classes.modal__body__header}>type of cuisine: </h2>
                    <div className={classes.modal__body__grid}>
                        <button onClick={() => onCuisineClick("chinese")} className={classes.modal__body__grid__btn}> Chinese </button>
                        <button onClick={() => onCuisineClick("japanese")} className={classes.modal__body__grid__btn}> Japanese </button>
                        <button onClick={() => onCuisineClick("french")} className={classes.modal__body__grid__btn}> French </button>
                        <button onClick={() => onCuisineClick("vietnamese")} className={classes.modal__body__grid__btn}> Vietnamese </button>
                        <button onClick={() => onCuisineClick("thai")} className={classes.modal__body__grid__btn}> Thai </button>
                        <button onClick={() => onCuisineClick("indian")} className={classes.modal__body__grid__btn}> Indian </button>
                        <button onClick={() => onCuisineClick("korean")} className={classes.modal__body__grid__btn}> Korean </button>
                        <button onClick={() => onCuisineClick("none")} className={classes.modal__body__grid__btn2}> - none </button>
                    </div>
                    <p className={classes.modal__body__p}>{filters.cuisine}</p>
                    <br/>
                    <h2 className={classes.modal__body__header}>meal type: </h2>
                    <div className={classes.modal__body__grid}>
                        <button onClick={() => onMealClick("dessert")} className={classes.modal__body__grid__btn}> Dessert </button>
                        <button onClick={() => onMealClick("appetizer")} className={classes.modal__body__grid__btn}> Appetizers </button>
                        <button onClick={() => onMealClick("entrees")} className={classes.modal__body__grid__btn}> Entrees </button>
                        <button onClick={() => onMealClick("drinks")} className={classes.modal__body__grid__btn}> Drinks </button>
                        <button onClick={() => onMealClick("none")} className={classes.modal__body__grid__btn2}> - none </button>
                    </div>
                    <p className={classes.modal__body__p}>{filters.meal}</p>
                    <br/>
                    <div>
                        <button onClick={() => (props.setTrigger(false), props.onApplyClick(filters))} className = {classes.modal__body__applybtn}>apply</button>
                        <button onClick={() => setFilters({'time':0, 'cuisine':"", 'meal':""})} className = {classes.modal__body__applybtn}>clear filters</button>
                    </div>
                    
                </div>
            </Modal.Body>
        </Modal>
    );
}
//() => props.setTrigger(false)
export default Filter
