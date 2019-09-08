import React from "react";
import PropTypes from 'prop-types';

export default class RadioButtonsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.state = {
            checked: undefined
        }

    }
    onChange(event) {
        const {baseComponentConfig: {props: {onChange}}} = this.props;
        this.setState({checked: event.target.value});
        onChange(event);
    }
    isChecked(prop) {
        if (prop.value === this.state.checked) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        const {baseComponentConfig: {data, name}} = this.props;

        let rows = [];
        let i = 0;
        let j = data.length;
        for (i; i < j; i++) {
            rows.push(
                <div id={data[i].id} className={data[i].className} style={{margin: 'auto', width: '120px'}} key={i}>
                    <label className="radio-inline">
                    </label>
                    <input key={i} type="radio"
                           checked={this.isChecked(data[i])}
                           value={data[i].value}
                           name={name}/>
                    {data[i].label}
                </div>
            );
        }

        return (
            <div className="row" style={{width: '250px', margin: '30px auto'}} onChange={this.onChange}>
                {rows}
            </div>
        );
    }
}

RadioButtonsComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string, //label
        value: PropTypes.object //can be input, span etc.
    }))
};