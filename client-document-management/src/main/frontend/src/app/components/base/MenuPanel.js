import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {I18n} from 'react-redux-i18n';
import PropTypes from 'prop-types'
import {USER_LOGGED_SESSION} from "../../utils/Constants";

export class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refIsShowing: false,
            mouseDown: 0
        }
        ;
        this.handleHover = this.handleHover.bind(this);
        this.onAnimationComplete = this.onAnimationComplete.bind(this);
        this.onMouseLeftSubMenu = this.onMouseLeftSubMenu.bind(this);
        this.onMouseEnteredSubMenu = this.onMouseEnteredSubMenu.bind(this);
    }

    onAnimationComplete() {
        if (this.state.mouseDown == 0) {
            this.setState({refIsShowing: false})
        }

    };

    onMouseLeftSubMenu() {
        this.state.mouseDown = 0;
        this.onAnimationComplete();
    }

    onMouseEnteredSubMenu() {
        this.state.mouseDown = 1;
    }

    handleHover() {
        this.setState({refIsShowing: true});
    }

    render() {
        const {userRole} = this.props;
        let admin = userRole === 'ADMIN';
        let superUser = userRole === 'SUPER';
        let logged = localStorage.getItem(USER_LOGGED_SESSION);

        let subMenu = this.state.refIsShowing ?
            <ul className='menu' onMouseLeave={this.onMouseLeftSubMenu}
                onMouseOver={this.onMouseEnteredSubMenu}>
                <li>
                    <NavLink to='createDocument'>
                        {I18n.t("application.message.createDocument")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='uploadDocument'>
                        {I18n.t("application.message.upload")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='searchDocument'>
                        {I18n.t("application.message.search")}
                    </NavLink>
                </li>
            </ul> : '';


        return (
            <nav id="menu-component">
                {logged &&
                <ul>
                    {(superUser || admin) &&
                    <li>
                        <NavLink to='/createUser'>{I18n.t("application.message.createUser")}</NavLink>
                    </li>
                    }
                    {admin && <li>
                        <NavLink to='createCompany'>{I18n.t("application.message.createCompany")}</NavLink>
                    </li>
                    }
                    <li onMouseOver={this.handleHover} onMouseLeave={this.onAnimationComplete}
                        className={this.state.refIsShowing ? 'hover' : ''}>
                        <a>
                            {I18n.t("application.message.documents")}
                        </a>
                        {subMenu}
                    </li>
                    <li>
                        <NavLink to='logout'>
                            {I18n.t("application.message.logout")}
                        </NavLink>
                    </li>
                </ul>
                }
            </nav>
        )
            ;
    }

}

MenuComponent.propTypes = {
    userRole: PropTypes.string
};
export default (MenuComponent);