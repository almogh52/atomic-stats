import React from 'react';
import BasePage from '../components/base-page';
import AtomicCard from '../components/atomic-card';

import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography';
import { Select } from '@rmwc/select';

export default class Login extends BasePage {
    static async getInitialProps({ query }) {
        return { errorMessage: query.message, ign: query.ign }
    }

    constructor(props) {
        super(props);

        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        if (this.props.user && this.props.user.ign && typeof window !== "undefined" && window)
        {
            window.location = '/refresh-auth'
        }
    }

    validateForm(event) {
        if (event.target.ign.value == "")
            event.preventDefault()
    }

    render() {
        return (
            <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <AtomicCard className="atomic-post-register" title="Your Fortnite info" titleSize="headline3" titleColor="var(--mdc-theme-primary)" outlineColor="var(--mdc-theme-primary)" backgroundColor="var(--drawer-color)" width="calc(100% - 8px)" maxWidth="630px">
                    <Typography style={{ fontFamily: "Dosis", paddingLeft: "18px", color: "white" }}>
                        <p style={{ margin: "0", padding: "0", paddingLeft: "18px" }}>
                        Hey there and thank you for registering to our site!<br/><br/>
                        We need your fortnite's player info in order to enable features in the site.<br/>
                        Your info will be used to enable auto matches tracking for you, and easy access to your stats with just a click!
                        </p>
                    </Typography>
                    <Typography use="body2" style={{ position: "relative", top: "10px", paddingLeft: "18px", color: "#d32f2f" }}>{this.props.errorMessage}</Typography>
                    <form action="/post-register" method="POST" onSubmit={ this.validateForm } autoComplete="off" style={{ display: "flex", flexFlow: "column", paddingBottom: "16px", paddingTop: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <TextField box required className="atomic-text-field" style={{ width: "350px" }} defaultValue={ this.props.ign } label="Your In-game name" name="ign" type="text" />
                        </div>
                        <Button raised accent theme="secondary" style={{ flexFlow: "row", alignSelf: "center", marginTop: "16px" }}>
                            Save
                        </Button>
                    </form>
                </AtomicCard>
            </div>
        )
    }
}