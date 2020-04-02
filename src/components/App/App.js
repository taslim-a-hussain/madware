import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import Directory from '../Directory/Directory';

const Topics = () => (
    <div>
        <h1>Topics</h1>
    </div>
);

const TopicDetail = () => (
    <div>
        <h1>Topic Details</h1>
        <p>Here are the topic details.</p>
    </div>
);

const App = () => (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Directory} />
            <Route exact path="/topics" component={Topics} />
            <Route path="/topics/:topicId" component={TopicDetail} />
        </Switch>
    </div>
);


export default App;