import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";
import MenuComponent from "../integral/MenuComponent";

export class HeaderPanel extends Component {
    render() {
        return (
            <div className="row" id="header-panel">
                <div className="col-lg-12">
                    <div id="header-panel-logo">
                        <img src={logo} className="navbar-brand"/>
                    </div>
                    <MenuComponent>

                    </MenuComponent>
                </div>
            </div>
        );
    }
}

export default (HeaderPanel);