import React, { Component } from 'react';
import './UserOutput.css'

class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>Username</p>
                <p>{this.props.displayName}</p>
            </div>
        )
    }
}

export default UserOutput
