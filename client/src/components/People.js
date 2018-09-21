import React from "react";
import Person from "./Person";
import Loader from 'react-loader';

class People extends React.Component {
    render() {
        if (this.props.people.length > 0) {
            var peopleAll = [];
            for (var i = 0; i < this.props.people.length; i++) {
                peopleAll.push(<Person inf={this.props.people[i]} num={i + 1} key={i + 1} />);
            }
        }
        return (
            <div>
                {this.props.load && <div><Loader 
                    loaded={false} lines={13} length={20} width={10} radius={20}
                    corners={1} rotate={0} direction={1} color="#000" speed={1}
                    trail={60} shadow={false} hwaccel={false} className="spinner"
                    zIndex={2e9} top="50%" left="50%" scale={1.00}
                    loadedClassName="loadedContent" /></div>}
                {this.props.people.length > 0 && <div className="containerMy">{peopleAll}</div>}
                {this.props.error && <div className="alert alert-danger fade in alertMy" role="alert">
                    {this.props.error}
                </div>}
            </div>

        );
    }
};

export default People;