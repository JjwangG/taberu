import {Col} from 'react-bootstrap';
import classes from './styles/RecipePage.module.scss'
import React from 'react';
import StarRating from './components/StarRating';
import 'bootstrap/dist/css/bootstrap.min.css';

//<img src = {currentRecipe.img} className = {classes.main__info__img}/>
function RecipePage({currentRecipe}) {
    return (
        <Col className ={classes.main}>
            <div className ={classes.main__info}>
                <div className={classes.main__info__imgDiv}>
                    <img src = {currentRecipe.img} className = {classes.main__info__imgDiv__img} alt=''/>
                </div>
                <div className = {classes.main__info__details}>
                    <h1 className={classes.main__info__details__header}>{currentRecipe.name}</h1>
                    <h6 className={classes.main__info__details__h2}>by: {currentRecipe.author}</h6>
                    <StarRating defaultRating = {currentRecipe.rating}/>
                </div>
            </div>
            <br/>
            <div className ={classes.main__recipe}>
                <div className = {classes.main__recipe__ingredients}>
                    <h2>ingredients</h2>
                    <h2 className = {classes.main__recipe__ingredients__h2}>serving size: {currentRecipe.serving}</h2>
                    <ul className = {classes.main__recipe__ingredients__list}>
                        <div>
                            {currentRecipe.ingredients.map(ingredient => (
                                <li className = {classes.main__recipe__ingredients__list__ingredient}>{ingredient}</li>
                            ))}
                        </div>
                    </ul>
                    <br/>
                    <div>
                        <iframe width="320" height="210" src={currentRecipe.video} title="YouTube video" allowfullscreen></iframe>
                    </div>
                </div>
                <div className = {classes.main__recipe__prep}>
                    <h2>preparation</h2>
                    <ul className = {classes.main__recipe__prep__list}>
                    <div>
                        {currentRecipe.prep.map((step,index) => (
                            <li>
                                <p className = {classes.main__recipe__prep__list__header}>step {index+1}:</p>
                                <p className = {classes.main__recipe__prep__list__step}>{step}</p> 
                            </li>
                        ))}
                    </div>
                    </ul>
                </div>
            </div>
        </Col>
    );
  }
  export default RecipePage;
