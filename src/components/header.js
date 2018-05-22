import React from 'react';
import GuaranteedToRide from '../images/GuaranteedToRide.png';
import HeavenMP4 from '../images/Heaven/Heaven.mp4';
import HeavenWEBM from '../images/Heaven/Heaven.webm';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img
            src="img/GuaranteedToRide.png"
            alt="logo"
            className="header__logo img-responsive"
            src={GuaranteedToRide}
          />
        </div>
        <div className="header__bg-video">
          <video className="header__bg-video__content" autoPlay muted loop>
            <source src={HeavenMP4} type="video/mp4" />
            <source src={HeavenWEBM} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
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
