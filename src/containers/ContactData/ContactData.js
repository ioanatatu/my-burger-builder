import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import cls from "./ContactData.css";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
    };

    render() {
        return (
            <div className={cls.ContactData}>
                <h4>enter your contact data</h4>
                <form>
                    <input type="text" name="name" placeholder="your name" />
                    <input type="email" name="email" placeholder="email" />
                    <input type="text" name="address" placeholder="address" />
                    <input
                        type="number"
                        name="zip code"
                        placeholder="zip code"
                    />
                    <Button clicked>Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
