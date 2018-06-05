import React, { Component } from 'react';
import ProkiteboardingMenu from './components/prokiteboarding_menu';
import Header from './components/header';
import Footer from './components/footer';
import Repairs from './components/repairs';
import Lessons from './components/lessons';
import Book from './components/book';
import AboutLessons from './components/about_lessons';
import AboutRepairs from './components/about_repairs';
import MediaQuery from 'react-responsive';
import NavBar from './components/navbar';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProkiteboardingMenu />

        <Header />
        <main>
          <AboutLessons />
          <Lessons />
          <AboutRepairs />
          <Repairs />
          <Book />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
