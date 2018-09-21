import React from "react";

class Person extends React.Component {
    render() {
        return (
            <div>
                {this.props.inf.length > 0 && <div className="grey">
                    {this.props.num && <p> Result #: {this.props.num} </p>}
                    {this.props.inf[0] && <p> First Name: {this.props.inf[0]} </p>}
                    {this.props.inf[1] && <p> Last Name: {this.props.inf[1]} </p>}
                    {this.props.inf[2] && <p> Address: {this.props.inf[2]} </p>}
                    {this.props.inf[3] && <p> City: {this.props.inf[3]} </p>}
                    {this.props.inf[4] && <p> State: {this.props.inf[4]} </p>}
                </div>}
            </div>

        );
    }
}
export default Person;