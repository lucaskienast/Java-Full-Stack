import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'benSmith',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    loginClicked() {
        // benSmith, dummy
        if (this.state.username=='benSmith' && this.state.password=='dummy') {
            console.log('Successful');
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else {
            console.log('Failed');
            this.setState({
                showSuccessMessage: false,
                hasLoginFailed: true
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    Password: <input type="password" name="password" name="password"value={this.state.password} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;