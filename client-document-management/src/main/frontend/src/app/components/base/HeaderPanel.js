import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";
import MenuPanel from "../base/MenuPanel";

export class HeaderPanel extends Component {
    render() {
        return (
            <div className="row" id="header-panel">
                <div className="col-2" id="header-panel-logo">
                    <img src={logo} className="brand"/>
                </div>
                <div className="col-10">
                    <MenuPanel/>
                </div>
            </div>
        );
    }
}

export default (HeaderPanel);