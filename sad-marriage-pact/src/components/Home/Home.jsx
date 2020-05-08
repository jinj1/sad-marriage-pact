import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import Countdown, {zeroPad} from 'react-countdown-now';

// Random component
const Completionist = () => <p id="title3">Sorry you missed the deadline</p>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <p id="title3">{zeroPad(days)} days {zeroPad(hours)} hours {zeroPad(minutes)} minutes {zeroPad(seconds)} second left to fill out the survey</p>;
  }
};

class Home extends Component{
  render(){
    return <div>
        <div className="cover text-center">
          <img className="image" src="cover.png" alt="hand holding out two rings" />
          <div>
            <p id="title1">SUBTLE ASIAN DATING</p>
            <br />
            <p id="title2">MARRIAGE PACT</p>
            <br />
            
            <Countdown
              date={Date.UTC(2020,5,1)}
              renderer={renderer}
            />
            <NavLink to="/form"><button type="button" className="btn-xl btn-primary">Take the survey</button></NavLink>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <p className="subheading text-center">ABOUT</p>
            <p className="small-text">
              Hello, SAD Asians. Tired of seeing all the auctions of literal models when you’re
              a solid 4 in good lighting? We’ve got you. Introducing the Subtle Asian Dating
              Marriage Pact. Our survey will ask you a series of questions to help us match
              you with “the one.” Once we’ve collected all our survey responses, our
              algorithm will pair you with who you’re most compatible with.
              Everyone will receive an email with their SAD Marriage Pact.
            </p>
            <div className="content" />
            <p className="subheading text-center">DISCLAIMER</p>
            <p className="small-text">
              We are not responsible for any feelings you catch or broken hearts you suffer.
              We do not guarantee that you will like your match or that everyone will receive
              a match. Do what you will with that information. Any similarities between this
              site and the Michigan Marriage Pact are purely coincidental and
              definitely not because the creators are bored U-M grads.
            </p>
          </div>
        </div>
      </div>
  }
}
  

export default Home;
