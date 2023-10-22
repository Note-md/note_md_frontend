import React from 'react';
import Footer from './Footer';
import Header from '../../Shared/Header.Js';
import ProfileBtn from  '../Buttons/ProfileBtn'
import BoardBtn from '../Buttons/BoardBtn.Js';
import '../Css/Board';

const Board = () => {
  return (
    
    <div>
      <Header></Header>
      <h1>Welcome to your board</h1>
      <p>Contact us for more information!</p>
      <ProfileBtn></ProfileBtn>

      <div>
        
      </div>
      <Footer />
    </div>
 
  );
};

export default Board;