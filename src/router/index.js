import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './../components/Home/Home';
import State from './../components/State/State';
import Helplines from './../components/Helplines/Helplines';
import Patients from './../components/Patients/Patients';
import Four from './../components/Four/Four';

const Routes = (props) => {
    return(
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/state">
                    <State />
                </Route>
                <Route path="/patients">
                    <Patients />
                </Route>
                <Route path="/help">
                    <Helplines />
                </Route>
                <Route path="*">
                    <Four />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
