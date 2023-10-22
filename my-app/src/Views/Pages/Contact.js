import React from 'react';
import Footer from './Footer.Js';
import Header from '../../Shared/Header.Js';
import ProfileBtn from  '../Buttons/ProfileBtn.Js';
import BoardBtn from '../Buttons/BoardBtn.Js';
import '../Css/Contact';

const Contact = () => {
  return (
    
    <div>
      <ProfileBtn></ProfileBtn>
      <Header></Header>
      <h1>Contact us for more info</h1>
      <p>Leave us a review here </p>
      <BoardBtn>Please input your feedback here</BoardBtn>
      include("../shared/footer")
      <Footer />
    </div>

    
  );
};

export default Contact;
