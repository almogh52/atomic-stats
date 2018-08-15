import React from 'react';
import BasePage from '../components/base-page';
import AtomicCard from '../components/atomic-card';

import { Button } from 'rmwc/Button';
import { TextField } from 'rmwc/TextField';
import { Typography } from 'rmwc/Typography';

import Router from '../components/atomic-router';

export default class Login extends BasePage {
    static async getInitialProps({ query }) {
        return { errorMessage: query.message, username: query.username }
    }

    constructor(props) {
        super(props);

        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        if (this.props.user && typeof window !== "undefined" && window)
        {
            window.location = '/refresh-auth'
        }
    }

    validateForm(event) {
        if (event.target.username.value == "" || event.target.password.value == "")
            event.preventDefault()
    }

    render() {
        return (
            <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <AtomicCard className="atomic-login" title="Login" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="400px">
                    <Typography use="body2" style={{ paddingLeft: "18px", color: "red" }}>{this.props.errorMessage}</Typography>
                    <form action="/login" method="POST" onSubmit={ this.validateForm } autoComplete="off" style={{ display: "flex", flexFlow: "column", alignItems: "center", paddingBottom: "16px" }}>
                        <TextField box required ref="usernameField" className="atomic-text-field" defaultValue={ this.props.username } style={{ width: "350px" }} label="Username" name="username" type="text" />
                        <TextField box required ref="passwordField" className="atomic-text-field" style={{ width: "350px" }} label="Password" name="password" type="password" />
                        <Button raised accent theme="secondary" style={{ marginTop: "16px" }}>
                            Login
                        </Button>
                    </form>
                    <br />
                    <Button className="atomic-auth-button" onClick={() => Router.pushRoute("register")} style={{ textTransform: "none" }}>Not registered yet? Register Now</Button>
                </AtomicCard>
            </div>
        )
    }
}