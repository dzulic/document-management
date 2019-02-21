import React, {Component} from 'react';

export class MainPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div id="mainPanel">
                {children}
            </div>
        );
    }
}

export default (MainPanel);