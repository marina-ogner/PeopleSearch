import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        state: "",
        stateError: "",
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            stateError: ""
        };
        if (this.state.firstName.trim().length < 1) {
            isError = true;
            errors.firstNameError = "Please enter First Name";
        }
        if (this.state.lastName.trim().length < 1) {
            isError = true;
            errors.lastNameError = "Please enter Last Name";
        }
        if (this.state.state.trim().length < 1) {
            isError = true;
            errors.stateError = "Please enter State";
        }
        this.setState({
            ...this.state,
            ...errors
        });
        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                firstName: "",
                firstNameError: "",
                lastName: "",
                lastNameError: "",
                state: "",
                stateError: "",
            });
        }
        this.props.getPeople(e);
    };
    render() {
        return (
            <form className="form-inline needs-validation" onSubmit={e => this.onSubmit(e)}>
                <div className="form-group top">
                    <label className="sm-0">First Name </label>
                    <input
                        value={this.state.firstName}
                        onChange={e => this.change(e)}
                        disabled={this.props.load === true}
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Elon" />
                    <div className="invalid-feedback inputError">
                        {this.state.firstNameError}
                    </div>
                </div>
                <div className="form-group">
                    <label className="sm-0">Last Name</label>
                    <input
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                        disabled={this.props.load === true}
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Musk" />
                    <div className="invalid-feedback inputError">
                        {this.state.lastNameError}
                    </div>
                </div>
                <div className="form-group">
                    <label className="sm-0">State</label>
                    <input
                        value={this.state.state}
                        onChange={e => this.change(e)}
                        disabled={this.props.load === true}
                        type="text"
                        className="form-control"
                        name="state"
                        placeholder="LA" />
                    <div className="invalid-feedback inputError">
                        {this.state.stateError}
                    </div>
                </div>
                <button
                    disabled={this.props.load === true}
                    id="button"
                    className="btn btn-outline-primary"> Submit
                </button>
            </form>
        );
    }
};