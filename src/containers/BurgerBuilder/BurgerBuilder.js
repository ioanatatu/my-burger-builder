import React, { Component } from "react";
import Burger from "../../components/Burger/Burger.js";

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingrediens: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        },
    };
    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingrediens} />
                <div>Build Controls</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
