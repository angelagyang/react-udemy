import React, { Component } from 'react';

class ValidationComponent extends Component {
    render() {
        const lengthFeedback = this.props.textLength > 5 ? "Text long enough" : "Text too short"
        
        return (
            <div>
                {lengthFeedback}
            </div>
        )
    }
}

export default ValidationComponent;