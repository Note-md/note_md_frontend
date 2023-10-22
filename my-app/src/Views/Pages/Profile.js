import React from 'react'
import Footer from '../../Shared/Footer.js'
import Header from '../../Shared/Header.Js';
import BoardBtn from '../Buttons/BoardBtn.Js';
import ProfileBtn from '../Buttons/ProfileBtn.Js'
import '../Css/Home';
const Home = () => {
  return (
    
    <div>
      <Header></Header>
      <ProfileBtn></ProfileBtn>
      <h1>Home page</h1>
      <BoardBtn>Here is your board</BoardBtn>
      <BoardBtn></BoardBtn>
      
      <Footer />

    </div>
  );
};
export default Home;