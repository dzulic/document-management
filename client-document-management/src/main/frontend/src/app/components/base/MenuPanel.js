import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
        console.log("onMouseEnteredSubMenu");
        this.state.mouseDown = 1;
    }

    handleHover() {
        this.setState({refIsShowing: true});
    }

    render() {
        let subMenu = this.state.refIsShowing ?
            <ul className='menu' onMouseLeave={this.onMouseLeftSubMenu}
                onMouseOver={this.onMouseEnteredSubMenu}>
                <li >
                    <a href='createDocument'>
                        Create
                    </a>
                </li>
                <li>
                    <a href="uploadDocument">
                        Upload
                    </a>
                </li>
                <li>
                    <a href="searchDocument">
                        Search
                    </a>
                </li>
            </ul> : '';


        const {label} = this.props;
        return (
            <div id="menu-component">
                <div className='nav'>
                    <ul>
                        <li>
                            <a href='createUser'>
                                User panel
                            </a>
                        </li>
                        <li>
                            <a href='createCompany'>Create company</a>
                        </li>
                        <li onMouseOver={this.handleHover} onMouseLeave={this.onAnimationComplete}>
                            <a>
                                Documents
                                <i className='fa fa-caret-down'></i>
                            </a>
                            {subMenu}
                        </li>
                        <li>
                            <a href='logout'>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

MenuComponent.PropTypes = {
    label: PropTypes.string.isRequired
}
export default (MenuComponent);