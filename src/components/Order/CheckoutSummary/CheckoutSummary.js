import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import cls from "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
    return (
        <div className={cls.CheckoutSummary}>
            <h1>we hope it tastes well</h1>
            <div style={{ width: "300px", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
                <Button btnType="Danger" clicked>
                    CANCEL
                </Button>
                <Button btnType="Success" clicked>
                    CONTINUE
                </Button>
            </div>
        </div>
    );
};

export default CheckoutSummary;
