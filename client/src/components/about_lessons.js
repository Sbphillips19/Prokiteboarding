import React from 'react';
import { Button, Grid, Segment, Image, List } from 'semantic-ui-react';
import JumpSunset from '../images/jumpsunset.jpg';

const AboutLessons = () => (
  <section className="section-about-lessons" id="about-lessons">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Kiteboard Lessons</h2>
      <h3 className="heading-tertiary">
        Cheap, Guaranteed to Ride, All Levels
      </h3>
    </div>

    <Grid className="grid-about" stackable columns={2}>
      <Grid.Column className="grid-about__column">
        <h3 className="heading-tertiary u-margin-button-small">
          Affordable and Knowledgeable Instructors
        </h3>
        <List bulleted className="about-list">
          <List.Item className="about-list--item">
            Lowest rates in the Outerbanks
          </List.Item>
          <List.Item className="about-list--item">
            Knowledgeable and fun instructors
          </List.Item>
          <List.Item className="about-list--item">
            Walkie talkie helmets provide safest experience
          </List.Item>
        </List>
        <Button
          labelPosition="right"
          icon="right chevron"
          content="Learn More"
          size="big"
          className="learn-more-button"
          href="#lessons"
        />
      </Grid.Column>
      <Grid.Column className="grid-about__image">
        <Image size="large" rounded centered src={JumpSunset} />
      </Grid.Column>
    </Grid>
  </section>
);

export default AboutLessons;
