import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'; // Import Switch directly from react-router-dom
import Profile from './Views/Pages/Profile';
import Contact from './Views/Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

