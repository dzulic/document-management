import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";
import MenuPanel from "../base/MenuPanel";

export class HeaderPanel extends Component {
    render() {
        return (
            <div className="row" id="header-panel">
                <div className="col-md-2 offset-md-1" id="header-panel-logo">
                    <img src={logo} className="navbar-brand"/>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-5">
                    <MenuPanel/>
                </div>
            </div>
        );
    }
}

export default (HeaderPanel);