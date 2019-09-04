import React, {Component} from 'react';
import {I18n} from "react-redux-i18n";
import {fetchCompanies} from "../../actions/actions";
import {connect} from "react-redux";

export class MainPanel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {fetchCompanies} = this.props;
        fetchCompanies();
    }

    render() {
        return (
            <div className="mainPanel">
                {I18n.t("application.message.welcome")}
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchCompanies: () => dispatch(fetchCompanies()),
    }
}
function mapStateToProps() {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);