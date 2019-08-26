import React, {Component} from 'react';
import logo from "../../../../../resources/static/icon/logo.png";
import MenuPanel from "./MenuPanel";
import PropTypes from 'prop-types';

export class HeaderPanel extends Component {
    render() {
        const {logged} = this.props;

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
                {logged &&
                <div className="col-9">
                    <MenuPanel userRole={logged.userRole}/>
                </div>
                }
            </div>
        );
    }
}
HeaderPanel.propTypes = {
    logged: PropTypes.object
}
export default (HeaderPanel);