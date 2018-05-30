import React, { Component } from 'react';
import { Form, Segment, Radio } from 'semantic-ui-react';

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
    lessons: false,
    repairs: false
  };
  // toggleLessons = () => this.setState({ checked: !this.state.lessons });
  // toggleRepairs = () => this.setState({ checked: !this.state.repairs });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <section className="section-book" id="book">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Contact Us Now</h2>
          <h3 className="heading-tertiary">What are you waiting for?</h3>
        </div>
        <Segment inverted>
          <Form inverted>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
            </Form.Group>

            <Form.Group>
              <Form.Field>
                <Radio
                  label="Kiteboarding Lessons"
                  name="radioGroup"
                  value="lessons"
                  checked={this.state.value === 'lessons'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Kiteboarding Repairs"
                  name="radioGroup"
                  value="repairs"
                  checked={this.state.value === 'repairs'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>

            {this.state.value === 'lessons' && (
              <Form.Group>
                <Form.Select
                  fluid
                  label="Gender"
                  options={gender_options}
                  placeholder="Gender"
                />
                <Form.Select
                  fluid
                  label="Harness Size"
                  options={harness_size}
                  placeholder="Harness Size"
                />
              </Form.Group>
            )}
            <Form.TextArea
              label="About"
              placeholder="Tell us more about you..."
            />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </section>
    );
  }
}

export default Book;
