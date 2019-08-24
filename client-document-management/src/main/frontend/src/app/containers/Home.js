import React from "react";
import {connect} from "react-redux";
import MainPanel from "../components/base/MainPanel";
import LoginTask from "./login/LoginTask";
import {fetchCompanies} from "../actions/actions";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCompanies());
    }

    render() {
        return (
            <div className="home-container">
                <div className="row">
                    <div className="col-lg-12">
                        <MainPanel>
                            <LoginTask/>
                        </MainPanel>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Home)
