import React from "react";

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ing) => {
        return (
            <li key={ing}>
                <span style={{ textTransfort: "capitalize" }}>{ing}</span> :{" "}
                {props.ingredients[ing]}
            </li>
        );
    });

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>a delish burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to Checkout?</p>
        </React.Fragment>
    );
};

export default OrderSummary;
