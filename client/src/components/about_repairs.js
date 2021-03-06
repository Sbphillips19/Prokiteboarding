import React from 'react';
import { Button, Grid, Segment, Image, List } from 'semantic-ui-react';
import KiteRepair from '../images/kiterepair.jpg';

const AboutLessons = () => (
  <section className="section-about-repairs" id="about-repairs">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Pro Kiteboard Repairs</h2>
      <h3 className="heading-tertiary">Guaranteed To Last</h3>
    </div>

    <Grid className="grid-about" stackable columns={2}>
      <Grid.Column className="grid-about__column">
        <h3 className="heading-tertiary u-margin-button-small">
          Specialized in repairing kites
        </h3>
        <List bulleted className="about-list">
          <List.Item className="about-list--item">
            Quick turnaround to get you back on the water
          </List.Item>
          <List.Item className="about-list--item">
            Experienced with thousands of kite repairs
          </List.Item>
          <List.Item className="about-list--item">
            Treat everykite as if it is our own
          </List.Item>
        </List>
        <Button
          labelPosition="right"
          icon="right chevron"
          content="Learn More"
          size="big"
          className="learn-more-button"
          href="#repairs"
        />
      </Grid.Column>
      <Grid.Column className="grid-about__image">
        <Image size="large" rounded centered src={KiteRepair} />
      </Grid.Column>
    </Grid>
  </section>
);

export default AboutLessons;
