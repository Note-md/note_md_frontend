import React from 'react';
import Footer from '../Shared/Footer.js'
import Header from '../Shared/Header.Js';
import ProfileBtn from  '../Buttons/ProfileBtn.Js'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <ProfileBtn></ProfileBtn>
      <h1>Edit your profile</h1>
      <button class="profile-button">Profile</button>
      <form method="post" action="/">
        <div className="mb-3">
          <label className="form-label" htmlFor="fullname">
            Name
          </label>
          <input className="form-control" type="text" name="fullname" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email Address
          </label>
          <input className="form-control" type="text" name="email" />
        </div>
       
        <div className="mb-3">
          <label className="form-label1" htmlFor="provinces">
            Select a Canadian province:
          </label>
          <select id="provinces" name="province">
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
          </select>
        </div>
        <input className="btn btn-primary" type="submit" value="Finish editing" />
      </form>
      <Footer></Footer>
    </div>
  );
};

export default Home;
