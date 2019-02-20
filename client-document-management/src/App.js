import React, {Component} from 'react';
import {LoginForm} from "./components/login/LoginForm";
import "./styles/main.css"
import {MainPanel} from "./components/base/MainPanel";

class App extends Component {
    render() {
        return (
            <MainPanel>
                <LoginForm/>
            </MainPanel>);
    }
}

export default App;
