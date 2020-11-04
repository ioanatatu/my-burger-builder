import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity: props.show ? "1" : "0",
            }}
        >
            {props.children}
        </div>
    </React.Fragment>
);

export default Modal;

/////////////////////////////////////// IF I USE HERE A CLASS-BASED COMPONENT INSTEAD OF A FUNCTIONAL COMPONENT, code is more complicated
/////////////////////////////////////// revisit lesson 183 to see difference and component life cycle methods
