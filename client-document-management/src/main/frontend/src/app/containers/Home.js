/**
 * @author raicevicm on 05/06/2017.
 */
import React from "react";
import {connect} from "react-redux";

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
                        Jul
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
