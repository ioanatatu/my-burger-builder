import React from "react";
import classes from "./BurgerIngredient.css";

const BurgerIngredient = (props) => {
    let ingredient = null;

    // add here props.type VALIDATION

    switch (props.type) {
        case "bread-bottom":
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case "bead-top":
            ingredient = (
                <div className={classes.BreadTop}>
                    <div classes={classes.Seeds1}></div>
                    <div classes={classes.Seeds2}></div>
                </div>
            );
            break;
        case "meat":
            ingredient = <div className={classes.Meat}></div>;
            break;
        case "cheese":
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case "bacon":
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case "salad":
            ingredient = <div className={classes.Salad}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default BurgerIngredient;
