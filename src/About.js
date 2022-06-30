import {Col} from 'react-bootstrap';
import classes from './styles/About.module.scss'
import React from 'react';

function About() {
    return (
        <div className={classes.main}>
            <Col className ={classes.main__container}>
                <h1 className ={classes.main__container__header}>about us</h1>
                <p className ={classes.main__container__text}>
                    Whether you’re a foodie, an amateur cook, or a broke college student with a drawer full of 
                    wrinkled take-out menus and only rudimentary knowledge of how to boil an egg, you’ve come 
                    to the right place! From the Japanese word meaning, "to eat" or たべる, Taberu is our way of
                    sharing our favourite recipes and food from our cultures with the community. With recipes 
                    from all walks of life, with Taberu, users are always one click away from the perfect afternoon
                    brunch, family dinner, or picnic appetizer. All that's left to do is cook! 
                </p>
            </Col>
        </div>
    );
  }
  export default About;