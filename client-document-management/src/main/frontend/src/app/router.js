import React from "react";
import {history} from "./store.js";
import {Route, Router} from "react-router";
import Home from "./containers/Home"
import App from "./containers/App";
import CreateDocumentTask from "./containers/document/create/CreateDocumentTask";
import SearchDocumentTask from "./containers/document/search/SearchDocumentTask";
import UploadDocumentTask from "./containers/document/upload/UploadDocumentTask";
import CreateUserTask from "./containers/user/CreateUserTask";

const router =
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <App>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/logout"} component={Home}/>
            <Route exact path={"/createCompany"} component={CreateDocumentTask}/>
            <Route exact path={"/createUser"} component={CreateUserTask}/>
            <Route exact path={"/searchDocument"} component={SearchDocumentTask}/>
            <Route exact path={"/uploadDocument"} component={UploadDocumentTask}/>
            <Route exact path={"/createDocument"} component={CreateDocumentTask}/>
        </App>
    </Router>;

// export
export {router};
