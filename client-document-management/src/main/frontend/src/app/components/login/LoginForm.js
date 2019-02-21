import React, {Component} from 'react';
export class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <title>Login</title>
                <div>
                    <input type="text"/>
                </div>
                <button>login</button>
            </div>
        );
    }
}

export default (LoginForm);