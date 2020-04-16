import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const home = () => (
  <div>
    <div class="cover text-center">
    <img class="image" src="cover.png" alt="marriage pact cover photo"></img>
      <div>
        <p id="title1">SUBTLE ASIAN DATING</p>
        <br></br>
        <p id="title2">MARRIAGE PACT</p>
        <NavLink to="/form"><button type="button" className="btn-xl btn-primary">Take the survey</button></NavLink>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <p class="subheading text-center">ABOUT</p>
        <p class="small-text">Hello, SAD Asians. Tired of seeing all the auctions of literal models when you’re 
        a solid 4 in good lighting? We’ve got you. Introducing the Subtle Asian Dating Marriage Pact. Our survey 
        will ask you a series of questions to help us match you with “the one.” Once we’ve collected all our survey 
        responses, our algorithm will pair you with who you’re most compatible with. Everyone will receive an email 
        with their SAD Marriage Pact.</p>
      <div class="content"></div>
        <p class="subheading text-center">DISCLAIMER</p>
        <p class="small-text">We are not responsible for any feelings you catch or broken hearts you suffer. We do 
        not guarantee that you will like your match or that everyone will receive a match. Do what you will with that 
        information. Any similarities between this site and the Michigan Marriage Pact are purely coincidental and 
        definitely not because the creators are bored U-M grads.</p>
      </div>
    </div>
  </div>
);

export default home;
