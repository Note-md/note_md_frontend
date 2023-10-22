import React from 'react';
import Footer from '../Pages/'
import Header from '../../Shared/Header.Js';
import ProfileBtn from  ''
import BoardBtn from '../Buttons/BoardBtn';
import '../Css/Contact';

const Contact = () => {
  return (
    
    <div>
      <ProfileBtn></ProfileBtn>
      <Header></Header>
      <h1>Contact us for more info</h1>
      <p>Leave us a review here </p>
      <BoardBtn></BoardBtn>
      include("../shared/footer")
      <Footer />


    </div>

    
  );
};

export default Contact;
