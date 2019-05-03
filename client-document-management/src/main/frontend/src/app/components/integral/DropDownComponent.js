import React from "react";
import PropTypes from 'prop-types';
import {I18n} from "react-redux-i18n";
import DropDownOptionElement from "./DropDownOptionElement";


export default class DropDownComponent extends React.Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange(event) {
        const {baseComponentConfig: {props: {onChange}, decorateOnChange}} = this.props;
        onChange(event.target.value);
        if (decorateOnChange !== undefined) {
            decorateOnChange(event);
        }

    }


    getOptions(dropDownOptions, withTranslate, translateValuePrefix) {
        var dropDownElements = [];
        for (var i = 0; i < dropDownOptions.length; i++) {
            let disable = dropDownOptions[i].selectable != undefined && dropDownOptions[i].selectable === false;
            if (!withTranslate) {
                dropDownElements.push(
                    <option key={i} value={dropDownOptions[i].value} disabled={disable}>
                        {dropDownOptions[i].label}
                    </option>
                );
            } else {
                if (translateValuePrefix) {
                    dropDownElements.push(
                        <DropDownOptionElement key={i} translateValuePrefix={translateValuePrefix}
                                               dropDownOption={dropDownOptions[i]}/>
                    );
                } else {
                    dropDownElements.push(
                        <option key={i} value={dropDownOptions[i].value}>
                            {I18n.t("application.select." + dropDownOptions[i].value)}
                        </option>
                    );
                }

            }
        }

        return dropDownElements;
    }

    getData() {
        const {baseComponentConfig: {selectOptions, props, withTranslate, translateValuePrefix, disableSingleElementReadOnly, label}} = this.props;
        var selectElement = this.getOptions(selectOptions, withTranslate, translateValuePrefix);

        if (!disableSingleElementReadOnly && selectOptions.length == 1) {
            return (
                <div>
                    <select className="form-control" {...props} disabled id={label}>
                        {selectElement}
                    </select>
                    <label htmlFor={label}>{I18n.t('application.label.' + label)}</label>
                </div>
            )
        } else {
            return (
                <div>
                    <select className="form-control" {...props} onChange={this.onChange} id={label}>
                        <option key={-1} value=""/>
                        {selectElement}
                    </select>
                    <label htmlFor={label}>{I18n.t('application.label.' + label)}</label>
                </div>
            )

        }
    }

    render() {
        return (<div className="selectdiv">
                {this.getData()}
            </div>
        )
    }
}

DropDownComponent.defaultProps = {
    baseComponentConfig: {}
};

DropDownComponent.propTypes = {
    baseComponentConfig: PropTypes.shape({

        selectOptions: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string
                ]).isRequired, //dropdown value
                label: PropTypes.string.isRequired //dropdown label
            })
        ).isRequired, //data for render inside of dropdown

        props: PropTypes.object //data sent as {...props} to primitive element

    }).isRequired,
    inputProps: PropTypes.object, //array of attributes inside of select (used by @ReduxForm),
    label: PropTypes.string
}
