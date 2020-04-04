import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Directory from '../Directory/Directory';
import Shop from '../Shop/Shop';
import PageNotFound from '../PageNotFound/PageNotFound';


const App = () => (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={Directory} />
            <Route path="/shop" component={Shop} />
            <Route component={PageNotFound}/>
        </Switch>
    </div>
);


export default App;