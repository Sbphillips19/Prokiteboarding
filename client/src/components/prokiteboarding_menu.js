import React, { Component } from 'react';
import {
  Menu,
  Segment,
  Icon,
  Sticky,
  Responsive,
  Dropdown
} from 'semantic-ui-react';
import MediaQuery from 'react-responsive';
import ResponsiveMenu from 'react-responsive-navbar';

export default class ProkiteboardingMenu extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Responsive minWidth={800}>
          <Segment inverted className="main-menu" id="nav">
            <Menu top inverted pointing secondary>
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
                name="Contact us"
                active={activeItem === 'Contact us'}
                onClick={this.handleItemClick}
                href="#book"
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
        </Responsive>

        <Responsive maxWidth={800}>
          <Segment className="main-menu" id="nav">
            <Menu attached="top">
              <Dropdown item icon="sidebar" simple>
                <Dropdown.Menu>
                  <Dropdown.Item href="#about-lessons">
                    Lessons & Prices
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#about-repairs">
                    Kite Repairs
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#book">Contact us</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Menu position="right">
                <Menu.Item
                  name="facebook"
                  href="https://www.facebook.com/prokiteboarding/"
                  target="_blank"
                >
                  <Icon name="facebook" />
                  Facebook
                </Menu.Item>
                <Menu.Item
                  name="instagram"
                  href="https://www.instagram.com/obxkiteboardlessons/"
                  target="_blank"
                >
                  <Icon name="instagram" />
                  Instagram
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Segment>
        </Responsive>
      </div>
    );
  }
}
