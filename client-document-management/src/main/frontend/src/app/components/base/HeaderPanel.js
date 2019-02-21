import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";

export class HeaderPanel extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="navbar-brand"/>
            </div>
        );
    }
}

export default (HeaderPanel);