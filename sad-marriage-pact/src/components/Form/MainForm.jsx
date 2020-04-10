// MainForm.js
import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Preferences from './Preferences';
import QuestionairePart1 from './QuestionairePart1';
import QuestionairePart2 from './QuestionairePart2';
import QuestionairePart3 from './QuestionairePart3';
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
      pets: '',
      religion: ''
    },
    part2: {
      drink: '',
      rave: '',
      eatOut: '',
      cook: '',
      boba: '',
      gym: '',
      read: '',
      workout: '',
      sex: ''
    },
    part3: {
      white: '',
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

  handlePart3Change = input => (event, value) => {
    const { part3 } = this.state;
    part3[input] =  value.value
    this.setState({ 'part3' : part3})
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

  handlePart2DropdownChange = input => (event, data) => {
    const { part2 } = this.state;
    part2[input] =  data.value
    this.setState({ 'part2' : part2})
  }

  render(){
    const {step} = this.state;
    const { userDetails, preferences, part1, part2, part3 } = this.state;
    const values = { userDetails, preferences, part1, part2, part3};
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
      return <QuestionairePart2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleDropdownChange = {this.handlePart2DropdownChange}
          values={values.part2}
          />
    case 5:
      return <QuestionairePart3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange = {this.handlePart3Change}
          values={values.part3}
          />      
    case 6:
      return <Confirmation
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          />
    case 7:
      return <Success />
    default:
      return
    }
  }
}

export default MainForm;