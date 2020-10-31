import React from "react";
import BuildControl from "./BuildControl/BuildControl";
/*
 *
 * css classes
 */
import classes from "./BuildControls.css";

const controls = [
    {
        label: "Salad",
        type: "salad",
    },
    {
        label: "Bacon",
        type: "bacon",
    },
    {
        label: "Cheese",
        type: "cheese",
    },
    {
        label: "Meat",
        type: "meat",
    },
];

const BuildControls = ({
    ingredientAdded,
    ingredientRemoved,
    disabled,
    price,
    purchasable,
}) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {price.toFixed(2)}</p>
        {controls.map((c) => (
            <BuildControl
                key={c.label}
                label={c.label}
                added={() => ingredientAdded(c.type)}
                removed={() => ingredientRemoved(c.type)}
                disabled={disabled[c.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!purchasable}>
            ORDER NOW
        </button>
    </div>
);

export default BuildControls;
