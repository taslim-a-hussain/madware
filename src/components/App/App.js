import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import Directory from '../Directory/Directory';

const Hats = () => (
    <div>
        <h1>Hats</h1>
    </div>
);

const PageNotFound = (props) => (
    <div>
        <h1>Page not found 404 error</h1>
        <button onClick={() => props.history.push('/')}>Home</button>
    </div>
);

const App = () => (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Directory} />
            <Route path="/hats" component={Hats} />
            <Route component={PageNotFound}/>
        </Switch>
    </div>
);


export default App;