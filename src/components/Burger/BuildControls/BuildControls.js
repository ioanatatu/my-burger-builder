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

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabled }) => (
    <div className={classes.BuildControls}>
        {controls.map((c) => (
            <BuildControl
                key={c.label}
                label={c.label}
                added={() => ingredientAdded(c.type)}
                removed={() => ingredientRemoved(c.type)}
                disabled={disabled[c.type]}
            />
        ))}
    </div>
);

export default BuildControls;
