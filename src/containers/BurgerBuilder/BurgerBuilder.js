import React, { Component } from "react";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
    };
    addIngredientHandler = (type) => {
        const ingredientUpdatedCount = this.state.ingredients[type] + 1;

        // state should be updated in an immutable way
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = ingredientUpdatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
    };

    removeIngredientHandler = (type) => {};

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
