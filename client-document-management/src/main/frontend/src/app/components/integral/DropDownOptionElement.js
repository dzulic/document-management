
import React from "react";
import {connect} from "react-redux";

class DropDownOptionElement extends React.Component {

    constructor(props) {
        super(props);
        this.getTranslate = this.getTranslate.bind(this);

    }

    getTranslate(translateValuePrefix, dropdownValue){
        const {i18nTranslate} = this.props;
        let propsArray = translateValuePrefix.split('.');
        let translateValue = i18nTranslate;
        while(propsArray.length > 1) {
            translateValue = translateValue[propsArray.shift()];
        }
        return translateValue[propsArray[0] + dropdownValue];
    }


    render() {
        const {key, dropDownOption, translateValuePrefix} = this.props;

        return (
            <option key={key} value={dropDownOption.value}>
                {this.getTranslate(translateValuePrefix, dropDownOption.label)}
            </option>
        )
    }

}

function mapStateToProps(state) {
    const i18nt = state.i18n;
    return {
        i18nTranslate: i18nt.translations[i18nt.locale]

    };
}
export default connect(mapStateToProps)(DropDownOptionElement);

