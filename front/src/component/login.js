import React, { Component } from 'react';
import axios from 'axios';
//import './login.css'
class login extends Component {

    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      })  
    }
  
    onSubmit(e) {
        e.preventDefault();
        const obj = {
          email: this.state.email,
          password: this.state.password
        };
        axios.post('http://localhost:8080/login', obj)
            .then(res => alert(res.data));
        
        this.setState({
          email: '',
          password: ''
        })
    }
    
    render()  {
    return (
<div class="container h-100">
<div class="d-flex justify-content-center h-100">
    <div class="user_card">
        {/* <div class="d-flex justify-content-center">
            <div class="brand_logo_container">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo"/>
            </div>
        </div> */}
        <div class="d-flex justify-content-center form_container">
            <form onSubmit={this.onSubmit}>
                <div class="input-group mb-3">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text"  className="form-control" placeholder="adresse e-mail" value={this.state.email}
                        onChange={this.onChangeEmail}/>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password"  className="form-control" placeholder="password" value={this.state.password}
                        onChange={this.onChangePassword}/>
                </div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                        <label class="custom-control-label" for="customControlInline">Remember me</label>
                    </div>
                </div>
            
      
        <div class="d-flex justify-content-center mt-3 login_container">
        <input type="submit" value="Log in" className="btn btn-primary"/>
        </div>
        </form>
        </div>
        <div class="mt-4">
            <div class="d-flex justify-content-center links">
                Don't have an account? <a href="c" class="ml-2">Sign Up</a>
            </div>
            <div class="d-flex justify-content-center links">
                <a href="d">Forgot your password?</a>
            </div>
        </div>
    </div>
</div>
</div>
);

}
}
export default login;