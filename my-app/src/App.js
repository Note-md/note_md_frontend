import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // Import Switch directly from react-router-dom
import Profile from './/Views/Pages/Home';
import Contact from './/Views/Pages/Contact.Js';
import Board from './/Views/Pages/Board.Js';
import Home from './/Views/Pages/Home.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/board" component={Board}/>
          <Route path="/home" component={Home}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

