import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import KiteboardingContactUs from '../images/kiteboardingcontactus.jpg';

const ContactModal = () => (
  <Modal
    id="contact-modal"
    trigger={<div>Contact us now</div>}
    className="contact-modal"
  >
    <Modal.Header className="contact-modal--header">
      Prokiteboarding Contact Information
    </Modal.Header>
    <Modal.Content image className="contact-modal__content">
      <Image
        wrapped
        size="medium"
        src={KiteboardingContactUs}
        alt="contact-us"
        className="contact-modal__content--image"
      />
      <Modal.Description className="contact-modal__content__description">
        <Header className="contact-modal__content__description--header">
          Physical Address
        </Header>
        <p className="contact-modal__content__description--paragraph">
          24170 NC-12 Rodanthe NC 29768
        </p>
        <p className="contact-modal__content__description--paragraph">
          Email: JamesDeLelys@gmail.com
        </p>
        <p />
        <p className="contact-modal__content__description--paragraph">
          USA +1 716-254-7130
        </p>
        <p className="contact-modal__content__description--paragraph">
          WHATSAPP +1 716-254-7130
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ContactModal;