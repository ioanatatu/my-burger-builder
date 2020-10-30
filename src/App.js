import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <BurgerBuilder></BurgerBuilder>
                </Layout>
            </div>
        );
    }
}

export default App;

// containers are stateFUL components = created with class or functional components with useState
// stateLESS components = only for presentation
// typical project setup used in React: components, containers, assests, redux folders