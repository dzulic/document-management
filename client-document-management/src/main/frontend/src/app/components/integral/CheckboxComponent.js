import React from "react";
import PropTypes from 'prop-types';

export default class CheckboxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({active: !this.state.active})
    }

    render() {
        const {baseComponentConfig: {data, disabled}, input} = this.props;
        console.log(input)
        var rows = [];
        for (var i = 0; i < data.length; i++) {
            rows.push(
                <div className={data[i].classname} key={i}>
                    <label className="checkbox-inline">
                        <input key={i} type="checkbox"
                               onChange={() => {
                               }}
                               checked={this.state.active}
                               disabled={disabled}
                               name={data.name}/>
                        {data[i].name}
                    </label>
                </div>
            );
        }
        return (
            <div onChange={this.onChange}>
                {rows}
            </div>
        );
    }
}
CheckboxComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string, //label
        value: PropTypes.object //can be input, span etc.
    }))
}