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
import { connect } from 'react-redux';

class Routes extends React.Component{
    render(){
        const { data } = this.props;
        // console.log(data && data.current);
        return(
            <Router>
                {this.props.children}
                <Switch>
                    <Route exact path="/">
                        <>
                            <Home />
                        </>
                    </Route>
                    <Route path="/state"> 
                        <>
                            <State />
                        </>
                    </Route>
                    <Route path="/patients">
                        <React.Fragment key={data ? data.current : '12'}>
                            <Patients />
                        </React.Fragment>
                    </Route>
                    <Route path="/help">
                        <>
                            <Helplines />
                        </>
                    </Route>
                    <Route path="*">
                        <>
                            <Four />
                        </>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const matchStateToProps = (state) => {
    return{
        data: state.filterReducer.info
    }
}

export default connect(matchStateToProps)(Routes);
