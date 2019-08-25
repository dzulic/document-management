import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";
import MenuPanel from "./MenuPanel";

export class HeaderPanel extends Component {
    render() {
        return (
            <div className="row" id="header-panel">
                <div className="col-3" id="header-panel-logo">
                    <div className="row brand">
                        <div className="col-3">
                            <img src={logo}/>
                        </div>
                        <div className="col-9">
                            <span>Document Manager</span>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <MenuPanel/>
                </div>
            </div>
        );
    }
}

export default (HeaderPanel);