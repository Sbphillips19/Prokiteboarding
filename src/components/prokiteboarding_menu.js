import React, { Component } from 'react';
import { Menu, Segment, Icon, Sticky } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

export default class ProkiteboardingMenu extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted className="main-menu" id="nav">
        <Menu top inverted pointing secondary stackable>
          <Menu.Item
            name="Home"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
            href="#header"
          />
          <Menu.Item
            name="Lessons & Prices"
            active={activeItem === 'Lessons & Prices'}
            onClick={this.handleItemClick}
            href="#about-lessons"
          />
          <Menu.Item
            name="Kite Repairs"
            active={activeItem === 'Kite Repairs'}
            onClick={this.handleItemClick}
            href="#about-repairs"
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

          <Menu.Menu position="right">
            <Menu.Item
              name="facebook"
              active={activeItem === 'facebook'}
              onClick={this.handleItemClick}
              href="https://www.facebook.com/prokiteboarding/"
              target="_blank"
            >
              <Icon name="facebook" />
              Facebook
            </Menu.Item>
            <Menu.Item
              name="instagram"
              active={activeItem === 'instagram'}
              onClick={this.handleItemClick}
              href="https://www.instagram.com/obxkiteboardlessons/"
              target="_blank"
            >
              <Icon name="instagram" />
              Instagram
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
