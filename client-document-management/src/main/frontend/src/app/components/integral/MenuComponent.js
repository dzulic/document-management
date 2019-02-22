import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MenuComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {label} = this.props;
        return (
            <div id="menu-component">
                <div className='nav'>
                    <ul>
                        <li>
                            <a className='logo' href='http://andytran.me'>
                            </a>
                        </li>
                        <li>
                            <a href='#portfolio'>Portfolio</a>
                        </li>
                        <li>
                            <a href='#calendar'>
                                Calendar
                                <i className='fa fa-caret-down'></i>
                            </a>
                            <ul className='menu'>
                                <li>
                                    <a href='#event_one'>Event #1</a>
                                </li>
                                <li>
                                    <a href='#event_two'>Event #2</a>
                                </li>
                                <li>
                                    <a href='#event_three'>Event #3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#resume'>Resume</a>
                        </li>
                        <li>
                            <a href='#blog'>Blog</a>
                        </li>
                        <li>
                            <a href='#contact'>
                                <div className='fa fa-envelope'></div>
                            </a>
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