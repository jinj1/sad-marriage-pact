// form.js
import React, { Component } from 'react';
import './Form.css';
import MainForm from './MainForm';
import { Container } from 'semantic-ui-react';

class Form extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>     )
  }
}

export default Form;