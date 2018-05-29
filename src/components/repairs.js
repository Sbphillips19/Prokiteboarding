import React from 'react';
import {
  Button,
  Icon,
  Image as ImageComponent,
  Item,
  Label
} from 'semantic-ui-react';

import Sewing from '../images/sewing.jpg';
import Trailer from '../images/trailer.jpg';
import SewingSoundView from '../images/sewingsoundview.png';

const Repairs = () => (
  <section className="section-repairs">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Kiteboard Repairs</h2>
    </div>

    <Item.Group divided className="repairs-item-group">
      <Item className="repairs-item-group__item">
        <Item.Image src={Trailer} className="repairs-item-group__item--image" />
        <Item.Content className="repairs-item-group__item__content">
          <Item.Header as="a" className="repairs-item-group__item__header">
            Conveniently Located
          </Item.Header>
          <Item.Meta className="repairs-item-group__item__meta">
            24170 NC-12, Rodanthe, NC 27968
          </Item.Meta>
          <Item.Description className="repairs-item-group__item__description">
            Located right after the Chicamacomico water tower in Waves on the
            sound side. Our shop is parked inside of Rodanthe Watersports and
            Campground.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item className="repairs-item-group__item">
        <Item.Image src={Sewing} className="repairs-item-group__item--image" />
        <Item.Content className="repairs-item-group__item__content">
          <Item.Header as="a" className="repairs-item-group__item__header">
            Cheapest prices
          </Item.Header>
          <Item.Meta className="repairs-item-group__item__meta">
            $30 an hour
          </Item.Meta>
          <Item.Description className="repairs-item-group__item__description">
            Affordable prices to get you back and riding in no time. Only charge
            for time spent working on the kite and will give an estimate before
            we start working on your kite.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item className="repairs-item-group__item">
        <Item.Image
          src={SewingSoundView}
          className="repairs-item-group__item--image"
        />
        <Item.Content className="repairs-item-group__item__content">
          <Item.Header as="a" className="repairs-item-group__item__header">
            Parts Ready
          </Item.Header>
          <Item.Meta className="repairs-item-group__item__meta">
            Warehouse is stocked
          </Item.Meta>
          <Item.Description className="repairs-item-group__item__description">
            We have parts for all kite brands, from values to hoses. If
            something else is needed, we can order you parts or use pieces
            brought to us. Our kite repair sewing machine provides the highest
            quality stitching that is guaranteed to last.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  </section>
);

export default Repairs;
