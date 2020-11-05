import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { withRouter } from "react-router-dom"; // HOC provided by rrd to pass router-specific properties
/*
 *
 * css classes
 */
import classes from "./Burger.css";

const Burger = (props) => {
    console.log("props from Burger", props);
    // map the object into an array of ingredients
    let mappedIngredientsOnComponents = Object.keys(props.ingredients)
        .map((ingredientKey) => {
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
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    console.log(mappedIngredientsOnComponents);

    if (mappedIngredientsOnComponents.length === 0)
        mappedIngredientsOnComponents = <p>Please start adding ingredients</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {mappedIngredientsOnComponents}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default withRouter(Burger);
