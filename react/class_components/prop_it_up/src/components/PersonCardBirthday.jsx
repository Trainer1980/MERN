import React, { Component } from 'react';

class PersonCardBirthday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;

        const onClickHandler = () => {
            this.setState( { age: this.state.age + 1 } )
        }

        return (
            <div>
                <h2> { lastName }, { firstName }</h2>
                <h4>Age: { this.state.age }</h4>
                <h4>Hair Color: { hairColor }</h4>
                <button onClick = { onClickHandler }>Birthday Button for { firstName } { lastName }</button>
            </div>
        )
    }
}

export default PersonCardBirthday;