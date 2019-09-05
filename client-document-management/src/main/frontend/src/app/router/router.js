import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import App from "../containers/App";
import LoginTask from "../containers/login/LoginTask";
import CreateCompanyTask from "../containers/company/CreateCompanyTask";
import {Switch} from "react-router";
import MainPanel from "../components/base/MainPanel";
import CreateDocumentTask from "../containers/document/create/CreateTemplateTask";
import UploadDocumentTask from "../containers/document/upload/UploadDocumentTask";
import SearchDocumentTask from "../containers/document/search/SearchDocumentTask";
import CreateUserTask from "../containers/user/CreateUserTask";
import PrivateRoute from "./PrivateRoute";
import FillTemplateTask from "../containers/document/fill/FillTemplateTask";

const supportsHistory = 'pushState' in window.history;
const router =
    <BrowserRouter forceRefresh={!supportsHistory}>
        <App>
            <Switch>
                <Route exact path="/" component={MainPanel}/>
                <Route path='/login' component={LoginTask}/>
                <Route path='/fillDocument' component={FillTemplateTask}/>
                <PrivateRoute path='/logout' component={LoginTask}/>
                <PrivateRoute path='/createCompany' component={CreateCompanyTask}/>
                <PrivateRoute path='/createUser' component={CreateUserTask}/>
                <PrivateRoute path='/searchDocument' component={SearchDocumentTask}/>
                <PrivateRoute path='/uploadDocument' component={UploadDocumentTask}/>
                <PrivateRoute path='/createDocument' component={CreateDocumentTask}/>
            </Switch>
        </App>
    </BrowserRouter>;

// export
export {router};


