import React from 'react';
import { Grid, Card, Button, Image } from 'semantic-ui-react';
import card1 from '../images/kitelaunch.jpg';
import card2 from '../images/learntoride.jpg';
import card3 from '../images/kitesurf.jpg';
import card4 from '../images/kitejump.jpg';

const Lessons = () => (
  <section className="section-lessons" id="lessons">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Kiteboard Lessons</h2>
    </div>
    <Card.Group>
      <Card centered>
        <Image className="lessons-grid__column--image-1" src={card1} />
        <Card.Content className="lessons-grid__column__content--top">
          <Card.Header className="lessons-grid__column__content__header">
            2 Hours
          </Card.Header>
          <Card.Meta className="lessons-grid__column__content__meta">
            <span className="lessons-grid__column__content__meta--price">
              $150
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--bottom">
          <Card.Description className="lessons-grid__column__content__description">
            The first 2 Hours of kiteboarding are safety land-based lessons. The
            first half hour and the first day of kiteboarding will consist of
            safety, setup, and piloting a 2 Line ram air/foil trainer kite. The
            remainder of the lesson you will fly and learn the safety and setup
            of the 4 Line inflatable power kite. You will learn everything you
            need to know about flying a power kite. You will cover the safety
            and setup of the kite, discuss safe wind directions, learn how to
            launch and land the kite, learn the hand signals for launching and
            landing, how to relaunch the kite, and how to self land the kite.
          </Card.Description>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--extra" extra>
          <div className="btn book-now-button">
            <Button fluid color="green" href="#book">
              Book Now
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card centered>
        <Image className="lessons-grid__column--image-2" src={card2} />
        <Card.Content className="lessons-grid__column__content--top">
          <Card.Header className="lessons-grid__column__content__header">
            4 Hours
          </Card.Header>
          <Card.Meta className="lessons-grid__column__content__meta">
            <span className="lessons-grid__column__content__meta--price">
              $300
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--bottom">
          <Card.Description className="lessons-grid__column__content__description">
            The 3rd and 4th Hours are when you are going to get wet! In this
            part of the lessons you will be doing your first downwind body
            drags. When we arrive at the beach you will have the understanding
            and capability to set up your own gear. From that point we will
            recap what you previously learned, then we will focus mainly on
            downwind body drags in all directions; left, right and straight. We
            will also concentrate on some upwind body dragging. At the end of 4
            hours you will finish the lesson with the most important skill as an
            independent kiteboarder, a real time self rescue.
          </Card.Description>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--extra" extra>
          <div className="btn book-now-button">
            <Button fluid color="green" href="#book">
              Book Now
            </Button>
          </div>
        </Card.Content>
      </Card>
      <Card centered>
        <Image className="lessons-grid__column--image-3" src={card3} />
        <Card.Content className="lessons-grid__column__content--top">
          <Card.Header className="lessons-grid__column__content__header">
            6 Hours
          </Card.Header>
          <Card.Meta className="lessons-grid__column__content__meta">
            <span className="lessons-grid__column__content__meta--price">
              $450
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--bottom">
          <Card.Description className="lessons-grid__column__content__description">
            Now you are ready and you will be introduced to the kiteboard! You
            will learn how to upwind body drag with the board in both
            directions. You will be shown how to put the board on your feet, and
            how to stabalize yourself in the water while wearing the board. We
            will then practice our first water starts. The main goal of our last
            lesson is to be able to pull yourself up out of the water and ride
            for a few seconds and to be able to come to a controlled stop. This
            lesson will also end with a real time self rescue where the student
            does the complete self rescue on his/her own.{' '}
          </Card.Description>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--extra" extra>
          <div className="btn book-now-button">
            <Button fluid color="green" href="#book">
              Book Now
            </Button>
          </div>
        </Card.Content>
      </Card>

      <Card centered>
        <Image className="lessons-grid__column--image-4" src={card4} />
        <Card.Content className="lessons-grid__column__content--top">
          <Card.Header className="lessons-grid__column__content__header">
            1 Hours
          </Card.Header>
          <Card.Meta className="lessons-grid__column__content__meta">
            <span className="lessons-grid__column__content__meta--price">
              $75
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--bottom">
          <Card.Description className="lessons-grid__column__content__description">
            Additional hours to hone in on the skills learned in the first 6
            hours, or progress your riding to new heights. Can teach you how to
            make your transitions more stylish, learn how to jump, and your
            first inverts. From riding switch to riding strapless, we have you
            covered.
          </Card.Description>
        </Card.Content>
        <Card.Content className="lessons-grid__column__content--extra" extra>
          <div className="btn book-now-button">
            <Button fluid color="green" href="#book">
              Book Now
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </section>
);

export default Lessons;
