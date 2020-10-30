import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
/*
 *
 * css classes
 */
import classes from "./Burger.css";

const Burger = (props) => {
    // map the object into an array of ingredients
    const transformedIngredients = Object.keys(props.ingredients).map(
        (ingredientKey) => {
            return [...Array(props.ingredients[ingredientKey])].map(
                (_, index) => {
                    return (
                        <BurgerIngredient
                            key={ingredientKey + index}
                            type={ingredientKey}
                        />
                    );
                }
            );
        }
    );
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
