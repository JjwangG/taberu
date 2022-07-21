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

    const getLabel = (elemId) => {
        switch(elemId) {
            case 'filter':
                if (props.languageFlag){ 
                    return "Filters"
                }
                return "フィルター";
                break;
            case 'timetoprepare':
                if (props.languageFlag){ 
                    return "time to prepare:"
                }
                return "準備する時間：";
                break;
            case 'range':
                if (props.languageFlag){ 
                    return "range"
                }
                return "範囲";
                break;
            case 'hr':
                if (props.languageFlag){ 
                    return "hr"
                }
                return "アワー";
                break;
            case 'time0':
                if (props.languageFlag){ 
                    return "you have indicated you have no time preference"
                }
                return "時間の好みがないことを示しました";
                break;
            case 'cuisine':
                if (props.languageFlag){ 
                    return "type of cuisine:"
                }
                return "料理の種類：";
                break;
            case 'hr':
                if (props.languageFlag){ 
                    return "hr"
                }
                return "アワー";
                break;
            case 'chinese':
                    if (props.languageFlag){ 
                        return "chinese"
                    }
                    return "チャイニーズ";
                    break;
            case 'japanese':
                if (props.languageFlag){ 
                    return "japanese"
                }
                return "日本";
                break;
            case 'french':
                    if (props.languageFlag){ 
                        return "french"
                    }
                    return "フランス語";
                    break;
            case 'vietnamese':
                if (props.languageFlag){ 
                    return "vietnamese"
                }
                return "ベトナム";
                break;
            case 'american':
                if (props.languageFlag){ 
                    return "american"
                }
                return "アメリカン";
                break;
            case 'korean':
                    if (props.languageFlag){ 
                        return "korean"
                    }
                    return "韓国の";
                    break;
            case 'none':
                if (props.languageFlag){ 
                    return "none"
                }
                return "なし";
                break;
            case 'meal':
                if (props.languageFlag){ 
                    return "meal type: "
                }
                return "食事の種類：";
                break;
            case 'dessert':
                if (props.languageFlag){ 
                    return "dessert"
                }
                return "アメリカン";
                break;
            case 'appetizer':
                    if (props.languageFlag){ 
                        return "appetizers"
                    }
                    return "韓国の";
                    break;
            case 'entrees':
                if (props.languageFlag){ 
                    return "entrees"
                }
                return "プリモピアット";
                break;
            case 'drinks':
                if (props.languageFlag){ 
                    return "drinks"
                }
                return "飲み物";
                break;
            case 'apply':
                if (props.languageFlag){ 
                    return "apply"
                }
                return "申し込み";
                break;
            case 'clear':
                if (props.languageFlag){ 
                    return "clear filters"
                }
                return "クリアフィルター";
                break;
        }
        
    } 


    return(
        <Modal show={props.trigger} onHide={() => props.setTrigger(false)} className={classes.modal}>
            <Modal.Header closeButton className={classes.modal__header}>
                <Modal.Title className={classes.modal__header__title}>{getLabel("filter")}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modal__body}>
                <div>
                    <h2 className={classes.modal__body__header}> {getLabel("timetoprepare")} </h2>
                    <input type="range" id="slider" className={classes.modal__body__slider} 
                        value={sliderValue} min="0" max="60" onChange={handleSlider}/>{' '}
                    <p className={classes.modal__body__p}>{getLabel("range")}: 0 - {sliderValue} {getLabel("hr")}</p>
                    {sliderValue == 0 && <p className={classes.modal__body__p2}>{getLabel("time0")}</p>}
                    <br/>
                    <h2 className={classes.modal__body__header}>{getLabel("cuisine")} </h2>
                    <div className={classes.modal__body__grid}>
                        <button onClick={() => onCuisineClick("chinese")} className={classes.modal__body__grid__btn}> {getLabel("chinese")} </button>
                        <button onClick={() => onCuisineClick("japanese")} className={classes.modal__body__grid__btn}> {getLabel("japanese")} </button>
                        <button onClick={() => onCuisineClick("french")} className={classes.modal__body__grid__btn}> {getLabel("french")} </button>
                        <button onClick={() => onCuisineClick("vietnamese")} className={classes.modal__body__grid__btn}> {getLabel("vietnamese")} </button>
                        <button onClick={() => onCuisineClick("american")} className={classes.modal__body__grid__btn}> {getLabel("american")} </button>
                        <button onClick={() => onCuisineClick("korean")} className={classes.modal__body__grid__btn}> {getLabel("korean")} </button>
                        <button onClick={() => onCuisineClick("none")} className={classes.modal__body__grid__btn2}> - {getLabel("none")} </button>
                    </div>
                    <p className={classes.modal__body__p}>{getLabel(filters.cuisine)}</p>
                    <br/>
                    <h2 className={classes.modal__body__header}>{getLabel("meal")}</h2>
                    <div className={classes.modal__body__grid}>
                        <button onClick={() => onMealClick("dessert")} className={classes.modal__body__grid__btn}> {getLabel("dessert")} </button>
                        <button onClick={() => onMealClick("appetizer")} className={classes.modal__body__grid__btn}> {getLabel('appetizer')} </button>
                        <button onClick={() => onMealClick("entrees")} className={classes.modal__body__grid__btn}> {getLabel('entrees')} </button>
                        <button onClick={() => onMealClick("drinks")} className={classes.modal__body__grid__btn}> {getLabel('drinks')} </button>
                        <button onClick={() => onMealClick("none")} className={classes.modal__body__grid__btn2}> - {getLabel("none")} </button>
                    </div>
                    <p className={classes.modal__body__p}>{getLabel(filters.meal)}</p>
                    <br/>
                    <div>
                        <button onClick={() => (props.setTrigger(false), props.onApplyClick(filters))} className = {classes.modal__body__applybtn}>{getLabel("apply")}</button>
                        <button onClick={() => {setFilters({'time':0, 'cuisine':"", 'meal':""}); setSlider(30)} } className = {classes.modal__body__applybtn}>{getLabel("clear")}</button>
                    </div>
                    
                </div>
            </Modal.Body>
        </Modal>
    );
}
//() => props.setTrigger(false)
export default Filter
