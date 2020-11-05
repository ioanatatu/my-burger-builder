import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

// webpack is the
import classes from "./App.css";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                    <Checkout></Checkout>
                </Layout>
            </div>
        );
    }
}

export default App;

// containers are stateFUL components = created with class or functional components with useState
// stateLESS components = only for presentation
// typical project setup used in React: components, containers, assests, redux folders
