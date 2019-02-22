import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";
import MenuComponent from "../integral/MenuComponent";

export class HeaderPanel extends Component {
    render() {
        return (
            <div className="row" id="header-panel">
                <div className="col-md-2 offset-md-1" id="header-panel-logo">
                    <img src={logo} className="navbar-brand"/>
                </div>
                <div className="col-md-5"></div>
                <div className="col-md-4">
                    <MenuComponent/>
                </div>
            </div>
        );
    }
}

export default (HeaderPanel);