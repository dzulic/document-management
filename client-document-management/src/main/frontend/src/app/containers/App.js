import React, {Component} from 'react';
import HeaderPanel from "../components/base/HeaderPanel";
import Dialog from "../components/modals/Dialog";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {USER_LOGGED_SESSION} from "../utils/Constants";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        let loggedUser = JSON.parse(localStorage.getItem(USER_LOGGED_SESSION));

        return (
            <div className="container">
                <HeaderPanel logged={loggedUser}/>
                <Dialog/>
                {children}
            </div>);
    }
}

function mapStateToProps(state) {
    return {}
}
export default withRouter(connect(mapStateToProps)(App));
