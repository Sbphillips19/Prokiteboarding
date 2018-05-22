import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

export default class ProkiteboardingMenu extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted className="main-menu">
        <Menu inverted pointing secondary stackable>
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Lessons & Prices"
            active={activeItem === 'Lessons & Prices'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Kite Repairs"
            active={activeItem === 'Kite Repairs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Shop"
            active={activeItem === 'Shop'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Location"
            active={activeItem === 'Location'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact us"
            active={activeItem === 'Contact us'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Facebook"
            active={activeItem === 'Facebook'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
