import React from "react";
import {connect} from "react-redux";
import {fetchCompanies} from "../actions/actions";
import MainPanel from "../components/base/MainPanel";
import {Redirect} from "react-router";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
    }
    isUserLoggedIn() {
        return false;
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCompanies());
    }

    render() {
        return (
            <div className="home-container">
                {this.isUserLoggedIn()} ? (
                <MainPanel/>
                ) : (
                <Redirect to="/login"/>)
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Home)
