import React, { Component } from 'react';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from 'rmwc/TopAppBar';

import { TextField } from 'rmwc/TextField';

import {
  Drawer,
  DrawerContent
} from 'rmwc/Drawer';

import {
  ListItem,
  ListItemText
} from 'rmwc/List';

import { Button, ButtonIcon } from 'rmwc/Button';

import '../styles/page.scss';

import Router from '../routes';

import 'material-components-web/dist/material-components-web.min.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persistentOpen: true, 
      invalid: false
    };

    // This binding is necessary to make `this` work in the callback
    this.menuBtnPressed = this.menuBtnPressed.bind(this);
    this.searchPlayer = this.searchPlayer.bind(this);
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
      <div className="App">
        <div>
          <TopAppBar theme="primary" fixed className="atomic-app-bar">
            <TopAppBarRow>
              <TopAppBarSection alignStart>
                <TopAppBarNavigationIcon theme="primary" use="menu" onClick={this.menuBtnPressed}/>
                <TopAppBarTitle>Atomic Stats</TopAppBarTitle>
              </TopAppBarSection>
            </TopAppBarRow>
          </TopAppBar>
        </div>
        <div>
          <Drawer persistent className="atomic-drawer" open={this.state.persistentOpen}>
            <div className="mdc-drawer__toolbar-spacer" />
            <DrawerContent className="atomic-drawer-content">
              <ListItem>
                <ListItemText>Friends</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>My Stats</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>My Profile</ListItemText>
              </ListItem>
            </DrawerContent>
          </Drawer>
        </div>
        <TopAppBarFixedAdjust className="atomic-content-wrapper">
          <div className="atomic-search-wrapper">
            <TextField box onKeyPress={(e) => e.key == "Enter" ? this.searchPlayer() : null} invalid={this.state.invalid} ref="searchField" id="atomic-search-field" className="atomic-search-field" label="Epic Games Username" />
            <Button raised accent theme="secondary" className="atomic-search-button" onClick={this.searchPlayer}>
              <ButtonIcon>search</ButtonIcon>
              Search
            </Button>
          </div>
          <div className="atomic-content">
            {this.props.children}
          </div>
        </TopAppBarFixedAdjust>
      </div>
    );
  }
}

/*class AtomicIconRadioButton extends Component {
  constructor(props) {
    super(props);

    // Set toggled as false
    this.state = {toggled: this.props.selected === undefined ? false : this.props.selected};

    // Create a ref to the element and bind the function
    this.toggleElement = React.createRef();
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
  }

  select() {
    // If the button isn't toggled, toggle it
    if (this.state.toggled === false)
    {
      this.setState({toggled: true});
      ReactDOM.findDOMNode(this.toggleElement.current).style.color = this.props.selectedColor;

      // Call the group handler to handle the other radio buttons with the index of the button
      this.props.groupHandler(this.props.index);
    }
  }

  deselect() {
    this.setState({toggled: false});
    ReactDOM.findDOMNode(this.toggleElement.current).style.color = this.props.clearColor;
  }

  render() {
    return (
      <IconToggle ref={this.toggleElement}
        className="atomic-icon-radio-button"
        style={{color: this.state.toggled ? this.props.selectedColor : this.props.clearColor}}
        data-icon-inner-selector={this.props.iconSelector}
        on={{cssClass: this.props.icon}}
        off={{cssClass: this.props.icon}}
        onChange={this.select}>
        <i className={this.props.iconClass} />
      </IconToggle>
    )
  }
}

class AtomicIconRadioGroup extends Component {
  constructor(props) {
    super(props);

    // Bind 'this' to the function
    this.buttonToggled = this.buttonToggled.bind(this);
    this.getSelectedValue = this.getSelectedValue.bind(this);

    // Set the current option to not selected
    this.state = {
      currentOption: -1
    }

    // Create array of refs to hold the buttons
    this.buttonRefs = []
    for (var i = 0; i < this.props.info.length; i++)
    {
      this.buttonRefs[i] = React.createRef();
    }

    // If a selected index has been sent, toggle the button
    if (this.props.selectedIndex !== undefined) {
      // Set the current option to not selected
      this.state = {
        currentOption: this.props.selectedIndex
      }
    }
  }

  buttonToggled(index) {
    // If the current option isn't not selected, deselect the current option
    if (this.state.currentOption !== -1)
    {
      // Deselect the current button
      this.buttonRefs[this.state.currentOption].current.deselect();
    }

    // Set the new selected button index
    this.setState({currentOption: index});
  }

  getSelectedValue() {
    if (this.state.currentOption !== -1)
    {
      return this.props.info[this.state.currentOption].value;
    } else {
      return "None";
    }
  }

  render() {
    var buttons = []

    // Go through the buttons info that were given as a prop, for each one create a button
    for (var i = 0; i < this.props.info.length; i++)
    {
      // Create the button
      const iconRadioBtn = <AtomicIconRadioButton
                            ref={this.buttonRefs[i]}
                            key={i}
                            selected={this.state.currentOption === i}
                            clearColor={this.props.clearColor}
                            selectedColor={this.props.selectedColor}
                            iconSelector={this.props.info[i].iconSelector}
                            icon={this.props.info[i].icon}
                            iconClass={this.props.info[i].iconClass}
                            index={i}
                            groupHandler={this.buttonToggled}
                          />

      // Add the button to the list of buttons
      buttons.push(iconRadioBtn)
    }

    return(
      <div className={this.props.className + ' ' + "atomic-icon-radio-group"}>
        {buttons}
      </div>
    )
  }
}*/

export default Page;
