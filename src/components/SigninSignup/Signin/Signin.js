import React from 'react';
import './Signin.scss';


class Signin extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleSubmit = e => {
        e.preventDefault();

        this.setState(() => ({
            email: '',
            password: ''
        }));
    };

    handleChange = e => {
        const {value, name} = e.target;

        this.setState(() => ({
            [name]: value
        }));
    };
    

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email" 
                    name="email" 
                    required value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    <label>Email</label>
                    <input 
                    type="password" 
                    name="password" 
                    required value={this.state.password}
                    onChange={this.handleChange} 
                    />
                    <label>Password</label>
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        );
    }
}


export default Signin;