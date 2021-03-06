import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super();
        this.state = {
            firstNames: "",
            lastName: "",
            email: ""
        }
    }

    // handles different input changes
    onFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value }, () => this.validateData());
    }
    onLastNameChange = (event) => {
        this.setState({ lastName: event.target.value }, () => this.validateData());
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value }, () => this.validateData());
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onRePasswordChange = (event) => {
        this.setState({ rePassword: event.target.value }, () => this.validateData("rePassword"));
    }

    // validate all input
    validateData = () => {
        // text field where we display error message
        let errorField = document.getElementById("error");
        // expression for letters (i.e. "A","a","B","b",etc.)
        let letters = /^[A-Za-z]+$/;
        // expression for email format
        let mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // destructure variables from state
        let { firstName, lastName, email, password, rePassword } = this.state;
        let errorMessage = "";

        // firstName
        // since firstname can contain "-" and " ", replace them with a letter for validation
        firstName = firstName.replace(/-/g, "x");
        firstName = firstName.replace(/ /g, "x");
        // make sure firstname contains only letters
        if (!firstName.match(letters)) {
            if (firstName !== "") {
                errorMessage += "<br>*First name can only contain letters, hyphens and spaces";
            }
        }

        // lastname
        // since lastname can contain "-" and " ", replace them with a letter for validation
        lastName = lastName.replace(/-/g, "x");
        lastName = lastName.replace(/ /g, "x");
        // make sure lastname contains only letters
        if (!lastName.match(letters)) {
            if (lastName !== "") {
                errorMessage += "<br>*Last name can only contain letters, hyphens and spaces";
            }
        }

        // check if email matches the format
        if (!mailFormat.test(email)) {
            // check if user has entered an email
            if (email !== "") {
                errorMessage += "<br>*Email format is incorrect";
            }
        }
        // check if second password matches the first
        if (rePassword !== password) {
            errorMessage += "<br>*Passwords don't match"
        }

        errorField.innerHTML = errorMessage;
        return errorMessage;
    }

    // simple delay used in onSubmitSignUp for display purposes
    delay = ms => new Promise(res => setTimeout(res, ms));

    // handles what happens when user clicks Sign Up
    onSumbitSignUp = async () => {
        // if there are no error messages
        /*if (this.validateData() === "") {
            // show loader
            document.getElementById('loaderContainer').className = 'db';
            // make call to sign up route of backend
            fetch('https://guarded-castle-76432.herokuapp.com/signup', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    dateOfBirth: this.state.dateOfBirth,
                    gender: this.state.gender,
                    dateJoined: new Date(),
                    password: this.state.password
                })
            })
                .then(response => response.json())
                .then(user => {
                    document.getElementById('loaderContainer').className = 'dn';
                    // if we receive a user object with an email, sign up was successful.
                    if (user.email) {
                        this.props.loadUser(user);
                        this.props.onRouteChange('Home');
                    }
                    else {
                        // else if they haven't entered an email address, notify them
                        if (this.state.email === "") {
                            document.getElementById("error").innerHTML = "Enter an email address"
                        }
                        // else their email address must already be registered
                        else {
                            document.getElementById("error").innerHTML = "This email address already has an account registered with it. Sign in instead"
                        }
                    }
                })
        }
        // if there are error messages
        else {
            let temp = document.getElementById("error").innerHTML;
            // notify user they should first fix errors 
            document.getElementById("error").innerHTML = "Fix errors before signing up!"
            // wait three seconds
            await this.delay(3000);
            // change error text back to what it was before
            document.getElementById("error").innerHTML = temp;
        }*/
        sessionStorage.setItem('sessionID', 'true')
        this.props.history.push('/home');
        this.props.reloadPage();
    }

    render() {
        return (
          
            <article className="br3 ba dark-gray b--black-10 mv4 w-50-m w-25-l mw6 shadow-5 center">
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
                <div>
                    <main className="pa4 signUpWrapper white-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw6 ph0 mh0">Sign Up</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f5" htmlFor="text">First name</label>
                                    <input onChange={this.onFirstNameChange} className="pa2 input-reset ba bg-transparent white b--white w-100" type="text" name="firstname" id="firstname" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f5" htmlFor="text">Last name</label>
                                    <input onChange={this.onLastNameChange} className="pa2 input-reset ba bg-transparent white b--white w-100" type="text" name="lastname" id="lastname" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent white b--white w-100" type="email" name="email-address" id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                    <input onChange={this.onPasswordChange} className="pa2 input-reset ba bg-transparent white b--white w-100" type="password" name="password" id="password" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f5" htmlFor="password">Re-enter Password</label>
                                    <input onChange={this.onRePasswordChange} className="pa2 input-reset ba bg-transparent white b--white w-100" type="password" name="repassword" id="repassword" />
                                </div>
                            </fieldset>
                            <p className="ma1 red" id="error"></p>
                            <div className="newCenter ">
                                <input id="signup_btn" onClick={this.onSumbitSignUp} className="white-80 ph3 pv2 input-reset ba b--white bg-transparent grow pointer f5 dib" type="submit" value="Sign Up" />
                            </div>
                            <div id='loaderContainer' className='dn'>
                                <div className='pt1' id="loader">
                                    <div id="shadow"></div>
                                    <div id="box"></div>
                                </div>
                                <p id="loader-text" className="f4 pl3 pt2">Signing up...</p>
                            </div>
                            <div className="lh-copy newCenter mt3">
                                <p className="mb0">Already have an account?</p>
                                <p href="#0" onClick={()=> this.props.redirect()} className="white-80 ph3 pv2 input-reset ba b--white bg-transparent grow pointer f5 dib">Sign in</p>
                            </div>
                        </div>
                    </main>
                </div>
            </article>
        );
    }
}

export default Signup;