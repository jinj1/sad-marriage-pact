// form.js
import React, { Component } from 'react';
import './Form.css';
import { Container } from 'semantic-ui-react';
import MainForm from './MainForm';

class Form extends Component {
  render() {
    return (
      <div>
        <a href="/"><img className="logo" src="logo-01.png" alt="logo" /></a>
        <Container textAlign="center">
          <MainForm />
        </Container>
      </div>
    );
  }
}

export default Form;
