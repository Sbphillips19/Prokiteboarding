import React, { Component } from 'react';
import { Form, Segment, Radio, Popup, Button, Image } from 'semantic-ui-react';
import SunsetObx from '../images/sunsetobx.jpg';
import axios from 'axios';

const gender_options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

const harness_size = [
  { key: 'S', text: '30-32', value: 's' },
  { key: 'M', text: '32-34', value: 'm' },
  { key: 'L', text: '34-36', value: 'l' },
  { key: 'XL', text: '36-38', value: 'xl' },
  { key: 'Need to try on', text: 'Need to try on', value: 'Need to try on' },
  { key: 'Will bring own', text: 'Will bring own', value: 'Will bring own' }
];

class Book extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    lessons: false,
    repairs: false,
    gender: '',
    harnessSize: '',
    additionalInfo: '',
    radioGroup: false
  };

  handleSubmit = (e, { value }) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const phoneNumber = this.state.phoneNumber;
    const email = this.state.email;
    const radioGroup = this.state.radioGroup;
    const gender = this.state.gender;
    const harnessSize = this.state.harnessSize;
    const additionalInfo = this.state.additionalInfo;

    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        radioGroup: radioGroup,
        gender: gender,
        harnessSize: harnessSize,
        additionalInfo: additionalInfo
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  };

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    // console.log('firstName: ' + this.state.firstName);
    // console.log('lastName: ' + this.state.lastName);
    // console.log('phoneNumber: ' + this.state.phoneNumber);
    // console.log('email: ' + this.state.email);
    // console.log('radioGroup: ' + this.state.radioGroup);
    // console.log('gender: ' + this.state.gender);
    // console.log('harnessSize: ' + this.state.harnessSize);
    // console.log('additionalInfo: ' + this.state.additionalInfo);
  };

  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      lessons,
      repairs,
      gender,
      harnessSize,
      additionalInfo,
      radioGroup
    } = this.state;
    return (
      <section className="section-book" id="book">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Contact Us Now</h2>
          <h3 className="heading-tertiary">What are you waiting for?</h3>
        </div>

        <Segment inverted className="contact-us-now-form">
          <Form
            inverted
            method="POST"
            action="/contact"
            id="contact-form"
            onSubmit={this.handleSubmit}
          >
            <Form.Group widths="equal" className="Name">
              <Form.Input
                fluid
                label="First Name"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Last Name"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Input
              fluid
              label="Phone Number"
              className="PhoneNumber2"
              placeholder="(xxx)-xxx-xxxx"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
            />

            <Form.Input
              fluid
              label="Email Address"
              className="EmailAddress"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />

            <Form.Group className="RadioButtons">
              <Form.Field>
                <Radio
                  label="Kiteboarding Lessons"
                  name="radioGroup"
                  value="lessons"
                  checked={this.state.radioGroup === 'lessons'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Kiteboarding Repairs"
                  name="radioGroup"
                  value="repairs"
                  checked={this.state.radioGroup === 'repairs'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>

            {this.state.radioGroup === 'lessons' && (
              <Form.Group widths="equal" className="Dropdowns">
                <Form.Select
                  fluid
                  label="Gender"
                  name="gender"
                  value={gender}
                  options={gender_options}
                  placeholder="Gender"
                  onChange={this.handleChange}
                />
                <Form.Select
                  fluid
                  label="Harness Size"
                  name="harnessSize"
                  value={harnessSize}
                  options={harness_size}
                  placeholder="Harness Size"
                  onChange={this.handleChange}
                />
                <Popup
                  trigger={<Button icon="info" />}
                  size="small"
                  content="Waist sizing to have harness ready for you"
                />
              </Form.Group>
            )}
            <Form.TextArea
              className="AdditionalInfo"
              label="Message"
              name="additionalInfo"
              value={additionalInfo}
              placeholder="Additional information"
              onChange={this.handleChange}
            />
            <Form.Button type="submit" value="Submit">
              Submit
            </Form.Button>

            <div>
              {window.location.hash === '#success' && (
                <div id="success">
                  <p>Your message has been sent!</p>
                </div>
              )}
              {window.location.hash === '#error' && (
                <div id="error">
                  <p>An error occured while submitting the form.</p>
                </div>
              )}
            </div>
          </Form>
        </Segment>
      </section>
    );
  }
}

export default Book;
