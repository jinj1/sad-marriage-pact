import React from 'react';
import { NavLink } from 'react-router-dom';

const home = () => (
  <div className="jumbotron text-center">
    <h1>Subtle Asian Dating Marriage Pact</h1>
    <NavLink to="/form"><button type="button" className="btn btn-primary">Take the survey</button></NavLink>
  </div>
);

export default home;
