import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import App from "../containers/App";
import LoginTask from "../containers/login/LoginTask";
import CreateCompanyTask from "../containers/company/CreateCompanyTask";
import {Switch} from "react-router";
import {MainPanel} from "../components/base/MainPanel";

const router =
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <App>
            <Switch>
                <Route exact path={"/"} component={MainPanel}/>
                <Route exact path={"/login"} component={LoginTask}/>
                <Route path='/logout' component={LoginTask}/>
                <Route path='/createCompany' component={CreateCompanyTask}/>
                {/*  <PrivateRoute path='/createCompany' component={CreateCompanyTask}/>
                <PrivateRoute path='/createUser' component={CreateUserTask}/>
                <PrivateRoute path='/searchDocument' component={SearchDocumentTask}/>
                <PrivateRoute path='/uploadDocument' component={UploadDocumentTask}/>
                <PrivateRoute path='/createDocument' component={CreateDocumentTask}/>*/}
            </Switch>
        </App>
    </BrowserRouter>;

// export
export {router};


