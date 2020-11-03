import React from "react";
import Button from "../../UI/Button/Button";

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
            <p>Total price: {props.price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelPurchaseHandler}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.continuePurchaseHandler}>
                CONTINUE
            </Button>
        </React.Fragment>
    );
};

export default OrderSummary;
