import React from 'react';
import GuaranteedToRide from '../images/GuaranteedToRide.png';
import HeavenMP4 from '../images/Heaven/Heaven.mp4';
import HeavenWEBM from '../images/Heaven/Heaven.webm';
import ContactModal from './contact_modal';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  <ContactModal />
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.facebook.com/prokiteboarding/"
                  target="_blank"
                  className="footer__link"
                >
                  <ion-icon size="large" name="logo-facebook" />
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.instagram.com/obxkiteboardlessons/"
                  target="_blank"
                  class="footer__link"
                >
                  <ion-icon name="logo-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p class="footer__copyright">
            Built by{' '}
            <a href="#" class="footer__link">
              Stephen Phillips
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;

//
// <div className="header__text-box">
//   <h1 className="heading-primary">
//     <span className="heading-primary--main">Prokiteboarding</span>
//     <span className="heading-primary--sub">GuaranteedToRide</span>
//   </h1>
// </div>
