import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "../containers/Home"
import App from "../containers/App";
import LoginTask from "../containers/login/LoginTask";
import CreateCompanyTask from "../containers/company/CreateCompanyTask";
import CreateUserTask from "../containers/user/CreateUserTask";
import SearchDocumentTask from "../containers/document/search/SearchDocumentTask";
import UploadDocumentTask from "../containers/document/upload/UploadDocumentTask";
import CreateDocumentTask from "../containers/document/create/CreateDocumentTask";
import MenuPanel from "../components/base/MenuPanel";
import {Switch} from "react-router";
import PrivateRoute from "./PrivateRoute";

const router =
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <App>
            <MenuPanel/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/login"} component={LoginTask}/>
                <Route path='/logout' component={LoginTask}/>
                <PrivateRoute path='/createCompany' component={CreateCompanyTask} S/>
                <PrivateRoute path='/createUser' component={CreateUserTask}/>
                <PrivateRoute path='/searchDocument' component={SearchDocumentTask}/>
                <PrivateRoute path='/uploadDocument' component={UploadDocumentTask}/>
                <PrivateRoute path='/createDocument' component={CreateDocumentTask}/>
            </Switch>
        </App>
    </BrowserRouter>;

// export
export {router};


