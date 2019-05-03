import React, {Component} from 'react';
import HeaderPanel from "../components/base/HeaderPanel";

class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="container page">
                <HeaderPanel/>
                {children}
            </div>);
    }
}

export default App;
