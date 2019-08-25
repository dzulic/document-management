import React, {Component} from 'react';
import HeaderPanel from "../components/base/HeaderPanel";
import Dialog from "../components/modals/Dialog";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="container">
                <HeaderPanel/>
                <Dialog/>
                {children}
            </div>);
    }
}

export default App;
