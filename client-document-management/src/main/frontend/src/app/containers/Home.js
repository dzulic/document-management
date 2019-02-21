/**
 * @author raicevicm on 05/06/2017.
 */
import React from "react";
import HomeTask from './tasks/home/HomeTask';
import {tpiPostData} from "../actions/mbDeviceEngineActions";
import {HOME} from "../constants/applicantViewSteps.js"
import {ENTERED} from "../constants/applicantViewStates.js"
import {DemographicDataTask} from "./tasks/demographic/DemographicDataTask";
import * as constants from "../constants/constants";
import {getValueAppPropertyStore} from "../util/storeUtil";
import {connect} from "react-redux";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(tpiPostData(HOME, ENTERED));
    }

    render() {

        return (
            <div className="home-container">
                <div className="row">
                    <div className="col-lg-12">
                        <HomeTask/>
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
