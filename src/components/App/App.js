import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header';
import Directory from '../Directory/Directory';
import Shop from '../Shop/Shop';
import SigninSignup from '../SigninSignup/SigninSignup';
import PageNotFound from '../PageNotFound/PageNotFound';
import {auth, createUserProfileDocument} from '../../firebase/firebase';


class App extends React.Component {

    state = {
        currentUser: null
    };
    
    unsubscribeFromAuth = null;
    
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            createUserProfileDocument(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    
    
    render() {
        return  (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={Directory} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/signin" component={SigninSignup} />
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        );
    }
}


export default App;