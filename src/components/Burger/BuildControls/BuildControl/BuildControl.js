import React from "react";
/*
 *
 * css classes
 */
import classes from "./BuildControl.css";

const BuildControl = ({ label, added }) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={added}>
            More
        </button>
    </div>
);

export default BuildControl;
