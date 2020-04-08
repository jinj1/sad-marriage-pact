// form.js
import React, { Component } from 'react';
import './Form.css';
import { Container } from 'semantic-ui-react';
import MainForm from './MainForm';

class Form extends Component {
  render() {
    return (
      <Container textAlign="center">
        <MainForm />
      </Container>
    );
  }
}

export default Form;
