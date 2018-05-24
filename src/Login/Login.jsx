import React, { Component } from 'react';
import fire from '../Config/config';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="container">
                <div className="text">
                    <span> Welcome to React & Firebase Notes!</span>
                </div>
                <div className="email">
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="inpEmail" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="password">
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="inpPassword" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="buttons">
                        <button type="submit" onClick={this.login} className="textButton"><span>Log in</span></button>
                        <button onClick={this.signup} className="textButton"><span>Sign up</span></button>
                    </div>
            </div>
        );
    }
}
export default Login;
