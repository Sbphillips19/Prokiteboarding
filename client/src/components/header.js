import React from 'react';
import GuaranteedToRide from '../images/GuaranteedToRide.png';
import HeavenMP4 from '../images/Heaven/Heaven.mp4';
import HeavenWEBM from '../images/Heaven/Heaven.webm';

class Header extends React.Component {
  render() {
    return (
      <header className="header-main" id="header">
        <div className="header-main__logo-box">
          <img
            src="img/GuaranteedToRide.png"
            alt="logo"
            className="header-main__logo img-responsive"
            src={GuaranteedToRide}
          />
        </div>
        <a
          id="prokiteboarding-phone-number"
          className="btn btn--white"
          href="tel:1-716-254-7130"
        >
          Call Us Now!
        </a>
      </header>
    );
  }
}

export default Header;

//
// <div className="header__text-box">
//   <h1 className="heading-primary">
//     <span className="heading-primary--main">Prokiteboarding</span>
//     <span className="heading-primary--sub">GuaranteedToRide</span>
//   </h1>
// </div>
