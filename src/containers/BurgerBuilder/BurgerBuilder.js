import React, { Component } from "react";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../components/WithErrorHandler/WithErrorHandler";
import axios from "../../axios-orders";

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
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentWillMount() {
        console.log(this.props);

        axios
            .get(
                "https://myburgerproject-a948d.firebaseio.com/ingredients.json"
            )
            .then((res) => {
                console.log(res.data);
                this.setState({ ingredients: res.data });
            })
            .catch((error) => {
                this.setState({ error: true });
            });
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((key) => {
                return ingredients[key];
            })
            .reduce((total, el) => total + el);

        this.setState({ purchasable: sum > 0 }, () => {
            console.log("this.state.purchasable", this.state.purchasable);
        });
    };

    addIngredientHandler = (type) => {
        // add an ingredient based on type
        const ingredientUpdatedCount = this.state.ingredients[type] + 1;

        // copy the state to update it in an immutable way
        const updatedIngredients = {
            ...this.state.ingredients,
        };

        // update the copy of the state with the new ingredient count
        updatedIngredients[type] = ingredientUpdatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        // set state with updated information
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        const ingredientUpdatedCount = this.state.ingredients[type] - 1;

        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = ingredientUpdatedCount;

        const oldPrice = this.state.totalPrice;

        this.setState({
            totalPrice: oldPrice - INGREDIENT_PRICES[type],
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    // IMPORTANT !!! if we use < ES6 function syntax instead of arrow function, this keyword refers to a value that is undefined, if the method was triggered through an event
    // with arrow function it refers to the class BurgerBuilder and its state
    purchaseHandler = () => {
        console.log(this);
        this.setState({ purchasing: true });
    };

    cancelPurchaseHandler = () => {
        this.setState({ purchasing: false });
    };

    continuePurchaseHandler = () => {
        /*this.setState({ loading: true });
        // dummy order
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, // for production price should be calculated on the server, to make sure the user is not manipulating the code on the client side
            customer: {
                firstname: "Tom",
                lastname: "Green",
                address: {
                    street: "Tree Street",
                    city: "Berlin",
                },
                email: "some@some.com",
            },
            deliveryMethod: "fast",
        };
        console.log("continue with purchase");
        // ONLY for firebase you need to add .json at the end of the endpoint --> the endpoint ou need to target for firebase to function correctly

        // try {
        //     const response = await axios.post("/orders.json", order);
        //     console.log(response);
        // } catch (error) {
        //     console.log(error);
        // }

        axios
            .post("/orders.json", order)
            .then((res) => {
                console.log(res);
                this.setState({ loading: false, purchasing: false });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ loading: false, purchasing: false });
            });*/
        // firebase is really quick, so the spinner might not even be visible, but it's good practice nonetheless to show it in case there is some latency
        const queryParams = [];
        // passing ingredients via QUERY PARAMS
        for (let i in this.state.ingredients) {
            queryParams.push(
                encodeURIComponent(i) +
                    "=" +
                    encodeURIComponent(this.state.ingredients[i])
            );
        }
        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: "/checkout",
            search: "?" + queryString,
        });
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = this.state.error ? (
            <p>Ingredients can't be loaded</p>
        ) : (
            <Spinner />
        );

        if (this.state.ingredients) {
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </React.Fragment>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    cancelPurchaseHandler={this.cancelPurchaseHandler}
                    continuePurchaseHandler={this.continuePurchaseHandler}
                />
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <React.Fragment>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.cancelPurchaseHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

// wow, really nice way of solving this!!
// withErrorHandler returns a function with which we wrap the BurgerBuilder component --> lesson 183
export default withErrorHandler(BurgerBuilder, axios);
