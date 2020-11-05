import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

// treat-me-as-a-prefix standard regarding paths
import classes from "./App.css";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/" exact component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;

// containers are stateFUL components = created with class or functional components with useState
// stateLESS components = only for presentation
// typical project setup used in React: components, containers, assests, redux folders
