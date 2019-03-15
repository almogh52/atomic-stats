import React, { Component } from 'react';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarFixedAdjust
} from '@rmwc/top-app-bar';
import { TextField } from '@rmwc/textfield';
import {
  Drawer,
  DrawerContent
} from '@rmwc/drawer';
import {
  ListDivider,
  ListGroup,
  ListItem,
  ListItemText,
  ListItemGraphic,
  ListGroupSubheader
} from '@rmwc/list';
import { Button, ButtonIcon } from '@rmwc/button';
import { Menu, MenuItem, MenuSurfaceAnchor, SimpleMenuSurface } from '@rmwc/menu';

import '../styles/page.scss';

import Router from './atomic-router';

import 'material-components-web/dist/material-components-web.min.css';
import { Typography } from '@rmwc/typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persistentOpen: true, 
      invalid: false,
      authMenu: false
    };

    // This binding is necessary to make `this` work in the callback
    this.menuBtnPressed = this.menuBtnPressed.bind(this);
    this.searchPlayer = this.searchPlayer.bind(this);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  menuBtnPressed() {
    // Set the state of the drawer, if it is closed or it's undefined, open it
    if (this.state.persistentOpen === true)
    {
      this.setState({persistentOpen: false});

      // Start animation to move the content left with the drawer
      document.querySelector('.atomic-content-wrapper').style.animationName = "move-left"; // Default padding
      document.querySelector('.atomic-content-wrapper').style.animationDuration = "200ms";
      document.querySelector('.atomic-content-wrapper').style.paddingLeft = "0px";
    } else {
      this.setState({persistentOpen: true});

      // Start animation to move the content right with the drawer
      document.querySelector('.atomic-content-wrapper').style.animationName = "move-right"; // Default padding
      document.querySelector('.atomic-content-wrapper').style.animationDuration = "250ms";
      document.querySelector('.atomic-content-wrapper').style.paddingLeft = "239px";
    }
  }

  searchPlayer() {
    var playerName = this.refs.searchField.value;

    if (playerName.length === 0)
    {
      document.querySelector('.atomic-search-field input').focus();
      this.setState({invalid: true});
      return;
    }

    Router.pushRoute('player', {username: playerName})
  }

  render() {
    return (
      <div className="atomic-app">
        <div>
          <TopAppBar prominent theme="primary" fixed className="atomic-app-bar">
            <TopAppBarRow>
              <TopAppBarSection alignStart>
                <TopAppBarNavigationIcon theme="primary" icon="menu" style={{ margin: "auto 0" }}onClick={this.menuBtnPressed}/>
                <img src="/static/idk.png" />
              </TopAppBarSection>
              <TopAppBarSection alignEnd>
                {this.props.user ? (
                  <MenuSurfaceAnchor>
                    <Button className="atomic-white-ripple atomic-auth-button" onClick={evt => this.setState({'authMenu': !this.state.authMenu})}>
                      <ButtonIcon style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="user" />} />
                      My Account
                    </Button>

                    <form id="atomic-logout-form" action="/auth/logout" method="POST" />
                    <Menu
                      className="atomic-menu atomic-auth-menu"
                      open={this.state.authMenu}
                      onClose={evt => this.setState({authMenu: false})}
                    >
                      <MenuItem onClick={() => {
                        document.getElementById("atomic-logout-form").submit()
                      }}>
                      <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ color: "white", fontSize: "19px" }} icon="sign-out-alt" />}/>
                      Logout
                      </MenuItem>
                    </Menu>
                  </MenuSurfaceAnchor>
                ) : (
                  <div className="atomic-auth-buttons">
                    <Button className="atomic-auth-button" onClick={() => window.location = "/auth/google"}>
                      <ButtonIcon style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="sign-in-alt" />} />
                      Login with google
                    </Button>
                  </div>
                )}
              </TopAppBarSection>
            </TopAppBarRow>
          </TopAppBar>
        </div>
        <div>
        <Drawer dismissible className="atomic-drawer" open={this.state.persistentOpen} style={{ zIndex: "1" }}>
          <div style={{height: "160px"}} />
          <DrawerContent className="atomic-drawer-content">
            <ListGroup>
              <ListItem onClick={() => Router.pushRoute('index')}>
                <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="home" />}/>
                <ListItemText>Home</ListItemText>
              </ListItem>
              <ListDivider />
            </ListGroup>
            {
              this.props.user && this.props.user['player_id'] ? (
              <ListGroup>
                  <ListItem onClick={() => Router.pushRoute('id', {id: this.props.user['player_id']})}>
                    <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="chart-pie" />}/>
                    <ListItemText>My Stats</ListItemText>
                  </ListItem>
                <ListDivider />
              </ListGroup>
              ) : null
            }
            <ListGroup>
              <ListItem onClick={() => Router.pushRoute('leaderboard')}>
                <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="award" />}/>
                <ListItemText>Leaderboard</ListItemText>
              </ListItem>
              <ListItem onClick={() => Router.pushRoute('shop')}>
                <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="shopping-cart" />}/>
                <ListItemText>Item Shop</ListItemText>
              </ListItem>
              <ListItem onClick={() => Router.pushRoute('news')}>
                <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="newspaper" />}/>
                <ListItemText>News</ListItemText>
              </ListItem>
            </ListGroup>
            <ListDivider />
            {
              this.props.user ? (
                <ListGroup>
                  <ListGroupSubheader className="atomic-drawer-subheader">Shortcuts</ListGroupSubheader>
                  {                   
                    this.props.user.shortcuts.map(({ displayName, id }, i) => 
                      <ListItem key={i} onClick={() => Router.pushRoute('id', {id})}>
                        <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="user" />}/>
                        <ListItemText>{displayName}</ListItemText>
                      </ListItem>
                    )
                  }
                  
                  <SimpleMenuSurface
                    className="atomic-menu"
                    handle={
                      <ListItem>
                        <ListItemGraphic style={{ display: "flex" }} icon={<FontAwesomeIcon style={{ fontSize: "19px" }} icon="plus" />}/>
                        <ListItemText>Add shortcut</ListItemText>
                      </ListItem>
                    }
                  >
                    <div style={{padding: '1rem', width: '12rem'}}>
                      <Typography style={{ color: "white" }} use="body1">
                        Three easy steps to add a shortcut:
                        <br/><br/>
                        • Search for your wanted shortcut player in the search
                        <br/><br/>
                        • Click the "Add shortcut" button under the player's name
                        <br/><br/>
                        • The new shortcut will appear here! 😀
                      </Typography>
                    </div>
                  </SimpleMenuSurface>
                </ListGroup>
              ) : null
            }
          </DrawerContent>
        </Drawer>
        </div>
        <TopAppBarFixedAdjust className="atomic-content-wrapper" style={{ display: "flex", flexDirection: "column" }}>
          <div className="atomic-search-wrapper">
            <TextField box onKeyPress={(e) => e.key == "Enter" ? this.searchPlayer() : null} invalid={this.state.invalid} ref="searchField" id="atomic-search-field" className="atomic-text-field atomic-search-field" label="Epic Games Username" />
            <Button raised accent theme="secondary" className="atomic-search-button" onClick={this.searchPlayer}>
              <ButtonIcon icon="search" />
              Search
            </Button>
          </div>
          <div className="atomic-content" style={{ overflow: "hidden" }}>
            {this.props.children}
          </div>
          <div style={{ flexGrow: "1", display: "flex", alignItems: "flex-end" }}>
            <div className="atomic-footer" style={{ width: "100%", marginTop: "50px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "var(--drawer-color)", height: "50px" }}>
                <Typography use="body2" style={{ flexDirection: "row", color: "var(--mdc-theme-primary)", fontSize: "19px" }}>© 2018 Atomic Stats</Typography>
                <Typography use="caption" style={{ flexDirection: "row", color: "var(--mdc-theme-primary)" }}>Fortnite is a registered trademark of Epic Games.</Typography>
            </div>
          </div>
        </TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default Page;
