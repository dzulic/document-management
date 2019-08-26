import React, {Component} from 'react';
import HeaderPanel from "../components/base/HeaderPanel";
import Dialog from "../components/modals/Dialog";
import {connect} from "react-redux";
import {getValueAppPropertyStore} from "../utils/storeUtil";
import {LOGIN_USER} from "../utils/Constants";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, loggedUser} = this.props;
        return (
            <div className="container">
                <HeaderPanel logged={loggedUser}/>
                <Dialog/>
                {children}
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        loggedUser: getValueAppPropertyStore(state, LOGIN_USER)
    }
}
export default connect(mapStateToProps)(App);
