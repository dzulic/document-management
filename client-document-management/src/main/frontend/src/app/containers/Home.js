/**
 * @author raicevicm on 05/06/2017.
 */
import React from "react";
import {connect} from "react-redux";
import MainPanel from "../components/base/MainPanel";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
    }

    render() {

        return (
            <div className="home-container">
                <div className="row">
                    <div className="col-lg-12">
                        <MainPanel/>
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
