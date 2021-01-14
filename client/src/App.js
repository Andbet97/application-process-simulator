import React, { Fragment } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Simulator } from './components/Simulator';

function App() {
  return (
    <Fragment>
      <div id="main_container">
        <Navbar/>
        <div className="container">
          <Simulator/>
        </div>
      </div>
      <Footer/>
    </Fragment>    
  );
}

export default App;
