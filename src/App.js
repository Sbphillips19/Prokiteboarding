import React, { Component } from 'react';
import ProkiteboardingMenu from './components/prokiteboarding_menu';
import Header from './components/header';
import ButtonExampleButton from './components/button';
import MediaQuery from 'react-responsive';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProkiteboardingMenu />
        <Header />
        <ButtonExampleButton />
      </div>
    );
  }
}

export default App;
