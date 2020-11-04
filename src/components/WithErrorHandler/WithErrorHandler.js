import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
    // here we can useEffect() as well with functional components
    // class-based components have life-cycle methods

    // this is an anonymous class
    return class extends Component {
        state = {
            error: null,
        };

        componentDidMount() {
            axios.interceptors.request.use((req) => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(
                (res) => res,
                (error) => {
                    this.setState({ error: error });
                }
            );
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        };
        render() {
            return (
                <React.Fragment>
                    <Modal
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    };
};

export default WithErrorHandler;
