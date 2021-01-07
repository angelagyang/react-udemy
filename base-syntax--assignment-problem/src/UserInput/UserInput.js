import React, { Component } from 'react';

class UserInput extends Component {

    render() {
        // in-line style example
        const style = {
            border: '1px solid blue',
            margin: 'auto', 
            padding: '8px'
        };

        return (
            <input style={style} type="text" value={this.props.username} onChange={this.props.changed}/>
        )
    }
}

export default UserInput
