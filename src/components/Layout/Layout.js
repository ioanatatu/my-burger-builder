import React, { Component } from "react";
// import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    };
    toggleSideDrawerHandler = () => {
        // DO NOT use state in a setState because of the async nature of setState
        // this is the clean way of setting a state when it depends on the old state
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        // example of inline style
        const content = {
            marginTop: "72px",
        };

        return (
            <React.Fragment>
                <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler} />
                <SideDrawer
                    closed={this.closeSideDrawerHandler}
                    open={this.state.showSideDrawer}
                />
                <main style={content}>{this.props.children}</main>
            </React.Fragment>
        );
    }
}
export default Layout;
