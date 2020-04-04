import React from 'react';
import './Signin.scss';
import FormInput from '../FormInput/FormInput';


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
                    <FormInput 
                    type="email" 
                    name="email" 
                    required value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    />
                    
                    <FormInput 
                    type="password" 
                    name="password" 
                    required value={this.state.password}
                    handleChange={this.handleChange} 
                    label="password"
                    />
                   
                    <input type="submit" value="Sign in" />
                </form>
            </div>
        );
    }
}


export default Signin;