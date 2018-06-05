import React, { Component } from 'react';
import { Form, Segment, Radio, Popup, Button, Image } from 'semantic-ui-react';
import SunsetObx from '../images/sunsetobx.jpg';

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
    additionalInfo: ''
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  // handleChange = (e, { value }) => this.setState({ value });

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
      additionalInfo
    } = this.state;
    return (
      <section className="section-book" id="book">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Contact Us Now</h2>
          <h3 className="heading-tertiary">What are you waiting for?</h3>
        </div>

        <Segment inverted className="contact-us-now-form">
          <Form inverted>
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
              className="PhoneNumber2"
              placeholder="(xxx)-xxx-xxxx"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.handleChange}
            />

            <Form.Input
              fluid
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
                  name="lessons"
                  value={lessons}
                  checked={this.state.lessons === 'lessons'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Kiteboarding Repairs"
                  name="repairs"
                  value={repairs}
                  checked={this.state.repairs === 'repairs'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>

            {this.state.value === 'lessons' && (
              <Form.Group widths="equal" className="Dropdowns">
                <Form.Select
                  fluid
                  label="Gender"
                  name="gender"
                  value={gender}
                  options={gender_options}
                  placeholder="Gender"
                />
                <Form.Select
                  fluid
                  label="Harness Size"
                  name="harnessSize"
                  value={harnessSize}
                  options={harness_size}
                  placeholder="Harness Size"
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
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </section>
    );
  }
}

export default Book;
