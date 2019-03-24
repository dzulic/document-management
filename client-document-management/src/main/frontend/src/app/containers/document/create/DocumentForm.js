import React, {Component} from 'react';

export class DocumentForm extends Component {

    constructor(props) {
        super(props);
        state:{
        }
    }


    render() {
        const {children} = this.props;
        return (
            <div id="container">
                <div className="row">
                    {children}
                </div>
            </div>
        );
    }

}

DocumentForm.propTypes = {}
export default (DocumentForm);