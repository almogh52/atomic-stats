import React, { Component } from 'react';
import AtomicCard from '../components/atomic-card';

import { Button } from 'rmwc/Button';
import { TextField, TextFieldHelperText } from 'rmwc/TextField';
import { Typography } from 'rmwc/Typography';

import Recaptcha from "react-recaptcha";

import '../styles/register.scss';
import BasePage from '../components/base-page';

export default class Register extends BasePage {
    static async getInitialProps({ query }) {
        return { errorMessage: query.message, username: query.username, email: query.email }
    }

    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username ? this.props.username : "",
            email: this.props.email ? this.props.email : "",
            password: "",
            passwordConfirm: ""
        }

        this.checkPassword = this.checkPassword.bind(this);
        this.colorForPassword = this.colorForPassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        if (this.props.user && typeof window !== "undefined" && window)
        {
            window.location = '/refresh-auth'
        }
    }

    validateUsername() {
        var re = /^[a-z0-9_-]{3,15}$/
        return re.test(this.state.username)
    }

    validateEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.state.email);
    }

    checkPassword() {
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        if (this.state.password == "")
        {
            return ""
        } else if (strongRegex.test(this.state.password)) {
            return "Strong password";
        } else if (mediumRegex.test(this.state.password)) {
            return "Medium password";
        } else {
            return "Week password";
        }
    }

    colorForPassword() {
        switch(this.checkPassword(this.state.password)) {
            case "Strong password":
                return "#2196f3";

            case "Medium password":
                return "#ff9800";

            case "Week password":
                return "#f44336";

            default:
                return "transparent";
        }
    }

    validateForm(event) {
        if (event.target.username.value == "" || event.target.email.value == "" || event.target.password.value == "" || event.target.passwordConfirm.value == "" || !this.validateEmail() || !this.validateUsername() || this.checkPassword() == "Week password" || this.state.password != this.state.passwordConfirm)
            event.preventDefault()
    }

    render() {
        return (
            <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <AtomicCard className="atomic-register" title="Register" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="400px">
                    <Typography use="body2" style={{ paddingLeft: "18px", color: "red" }}>{this.props.errorMessage}</Typography>
                    <form action="/register" method="POST" onSubmit={ this.validateForm } autoComplete="off" style={{ display: "flex", flexFlow: "column", alignItems: "center", paddingBottom: "16px" }}>
                        <TextField box required className="atomic-register-text-field atomic-text-field" style={{ width: "350px" }} defaultValue={ this.props.username } onChange={(event) => this.setState({ username: event.target.value })} label="Username" name="username" type="text" />
                        <TextFieldHelperText persistent style={{ alignSelf: "start", color: this.validateUsername() ? "#2196f3" : "#f44336", fontSize: "13px" }}>{ this.state.username ? this.validateUsername() ? "" : "Invalid username" : "" }</TextFieldHelperText>
                        <TextField box required className="atomic-register-text-field atomic-text-field" style={{ width: "350px" }} defaultValue={ this.props.email } onChange={(event) => this.setState({ email: event.target.value })} label="E-mail" name="email" type="text" />
                        <TextFieldHelperText persistent style={{ alignSelf: "start", color: this.validateEmail() ? "#2196f3" : "#f44336", fontSize: "13px" }}>{ this.state.email ? this.validateEmail() ? "" : "Invalid mail" : "" }</TextFieldHelperText>
                        <TextField box required className="atomic-register-text-field atomic-text-field" style={{ width: "350px" }} defaultValue={ this.state.password } onChange={(event) => this.setState({ password: event.target.value })} label="Password" name="password" type="password" />
                        <TextFieldHelperText persistent style={{ alignSelf: "start", color: this.colorForPassword(), fontSize: "13px" }}>{ this.checkPassword() }</TextFieldHelperText>
                        <TextField box required className="atomic-register-text-field atomic-text-field" style={{ width: "350px" }} defaultValue={ this.state.passwordConfirm } onChange={(event) => this.setState({ passwordConfirm: event.target.value })} label="Confirm password" name="passwordConfirm" type="password" />
                        <TextFieldHelperText persistent style={{ alignSelf: "start", color: this.state.password == this.state.passwordConfirm ? "#2196f3" : "#f44336", fontSize: "13px" }}>{ this.state.password && this.state.passwordConfirm ? this.state.password == this.state.passwordConfirm ? "Password match" : "Password doesn't match" : "" }</TextFieldHelperText>
                        <Recaptcha
                            className="atomic-recaptcha"
                            theme="dark"
                            sitekey="6LdGeWkUAAAAAJaTLXmNHX8w_NHBUTXPjFJWLFCp"
                        />
                        <Button raised accent onSubmit={ this.validateForm } theme="secondary">
                            Register
                        </Button>
                    </form>
                </AtomicCard>
            </div>
        )
    }
}