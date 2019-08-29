import React, {Component} from 'react';
import {I18n} from "react-redux-i18n";

export class MainPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainPanel">
                {I18n.t("application.message.welcome")}
            </div>
        );
    }
}

export default (MainPanel);