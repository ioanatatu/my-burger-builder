import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
/*
 *
 * css classes
 */
import classes from "./Burger.css";

const Burger = ({ ingredients }) => {
    // map the object into an array of ingredients
    let mappedIngredientsOnComponents = Object.keys(ingredients)
        .map((ingredientKey) => {
            return [...Array(ingredients[ingredientKey])].map((_, index) => {
                return (
                    <BurgerIngredient
                        key={ingredientKey + index}
                        type={ingredientKey}
                    />
                );
            });
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

export default Burger;
