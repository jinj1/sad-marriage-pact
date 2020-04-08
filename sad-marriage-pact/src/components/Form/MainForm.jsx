// MainForm.js
import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Preferences from './Preferences';
import QuestionairePart1 from './QuestionairePart1';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
  state = {
    step: 1,
    userDetails: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      height: '',
      gender: '',
      city: '',
      country: '',
      ethnicities: []
    },
    preferences : {
      minAge: '',
      maxAge: '',
      minHeight: '',
      maxHeight: '',
      genders: [],
      ethnicities: []
    },
    part1: {
      major: '',
      gpa: '',
      salary: '',
      kids: '',
      pets: '' 
    } 
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step : step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step : step - 1
    })
  }

  handleUserDetailsChange = input => event => {
    const { userDetails } = this.state;
    userDetails[input] =  event.target.value
    this.setState({ 'userDetails' : userDetails})
  }

  handleUserDetailsDropdownChange = input => (event, data) => {
    const { userDetails } = this.state;
    userDetails[input] =  data.value
    this.setState({ 'userDetails' : userDetails})
  }

  handlePreferencesChange = input => event => {
    const { preferences } = this.state;
    preferences[input] =  event.target.value
    this.setState({ 'preference' : preferences})
  }

  handlePreferencesDropdownChange = input => (event, data) => {
    const { preferences } = this.state;
    preferences[input] =  data.value
    this.setState({ 'preference' : preferences})
  }

  handlePart1DropdownChange = input => (event, data) => {
    const { part1 } = this.state;
    part1[input] =  data.value
    this.setState({ 'part1' : part1})
  }

  render(){
    const {step} = this.state;
    const { userDetails, preferences, part1 } = this.state;
    const values = { userDetails, preferences, part1 };
    switch(step) {
    case 1:
      return <UserDetails
          nextStep={this.nextStep}
          handleChange = {this.handleUserDetailsChange}
          handleDropdownChange = {this.handleUserDetailsDropdownChange}
          values={values.userDetails}
          />
    case 2:
      return <Preferences
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange = {this.handlePreferencesChange}
          handleDropdownChange = {this.handlePreferencesDropdownChange}
          values={values.preferences}
          />
    case 3:
      return <QuestionairePart1
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleDropdownChange = {this.handlePart1DropdownChange}
          values={values.part1}
          />
    case 4:
      return <Confirmation
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          />
    case 4:
      return <Success />
    default:
      return
    }
  }
}

export default MainForm;