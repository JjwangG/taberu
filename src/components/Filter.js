import { Modal,Button } from "react-bootstrap";
import classes from './../styles/Filter.module.scss';
import React from 'react';
import { useState } from 'react';

function Filter(props){
    const [sliderValue, setSlider] = useState(50);

    const handleSlider = (e) => setSlider(e.target.value);

    return(
        <Modal show={props.trigger} onHide={() => props.setTrigger(false)} className={classes.modal}>
            <Modal.Header closeButton className={classes.modal__header}>
                <Modal.Title className={classes.modal__header__title}>Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modal__body}>
                <div>
                    <h2 className={classes.modal__body__header}>time to prepare: </h2>
                    <input type="range" id="slider" className={classes.modal__body__slider} 
                        value={sliderValue} min="0" max="100" onChange={handleSlider}/>{' '}
                    <p>range: 0 - {sliderValue} min</p>
                    <br/><br/>
                    <h2 className={classes.modal__body__header}>type of cuisine: </h2>
                    <div className={classes.modal__body__grid}>
                        <button className={classes.modal__body__grid__btn}> Chinese </button>
                        <button className={classes.modal__body__grid__btn}> Japanese </button>
                        <button className={classes.modal__body__grid__btn}> French </button>
                        <button className={classes.modal__body__grid__btn}> Vietnamese </button>
                        <button className={classes.modal__body__grid__btn}> Thai </button>
                        <button className={classes.modal__body__grid__btn}> Indian </button>
                        <button className={classes.modal__body__grid__btn}> Korean </button>
                        <button className={classes.modal__body__grid__btn2}> + more </button>
                    </div>
                    <br/>
                    <h2 className={classes.modal__body__header}>meal type: </h2>
                    <div className={classes.modal__body__grid}>
                        <button className={classes.modal__body__grid__btn}> Dessert </button>
                        <button className={classes.modal__body__grid__btn}> Appetisers </button>
                        <button className={classes.modal__body__grid__btn}> Entrees </button>
                        <button className={classes.modal__body__grid__btn}> Drinks </button>
                        <button className={classes.modal__body__grid__btn2}> + more </button>
                    </div>
                    <br/>
                    <Button onClick={() => props.setTrigger(false)} className = {classes.modal__body__applybtn}>apply</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default Filter
