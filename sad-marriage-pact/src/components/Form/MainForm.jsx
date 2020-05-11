// MainForm.js
import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Preferences from './Preferences';
import QuestionairePart1 from './QuestionairePart1';
import QuestionairePart2 from './QuestionairePart2';
import QuestionairePart3 from './QuestionairePart3';
import ContactInfo from './ContactInfo';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
  state = {
    step: 5,
    userDetails: {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      height: '',
      gender: '',
      country: [],
      ethnicities: [],
      valid: true
    },
    preferences : {
      minAge: '',
      maxAge: '',
      minHeight: '',
      maxHeight: '',
      genders: [],
      ethnicities: [],
      valid: true
    },
    part1: {
      major: '',
      gpa: '',
      salary: '',
      kids: '',
      pets: '',
      religion: '',
      loveLang: '',
      hotpot: '',
      rice: '',
      valid: true
    },
    part2: {
      drink: '',
      smoke: '',
      weed: '',
      drug: '',
      rave: '',
      eatOut: '',
      cook: '',
      boba: '',
      read: '',
      workout: '',
      sex: '',
      valid: true
    },
    part3: {
      white: '',
      weeb: '',
      kpop: '',
      parent: '',
      maintainence: '',
      arrival: '',
      cleaniness: '',
      emotion: '',
      wholesome: '',
      personality: '',
      politics: '',
      commitment: '',
      valid: true,
    },
    contactInfo: {
      snapchat: '',
      instagram: '',
      facebook: '',
      email: '',
      other: '',
      valid: true,
    },
  }

  nextStep = async () => {
    const { step } = this.state
    var valid = this.checkValid(step)
    if (!valid){
      return;
    }
    if (step === 7){
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(this.state)
      }
      const request = new Request('/data', options)
      const response = await fetch(request)
      const status = await response.status
      console.log(status)
    }
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

  backToUserDetails = () => {
    this.setState({
      step : 1
    })
  }

  backToPreferences = () => {
    this.setState({
      step : 2
    })
  }

  checkValid = (step) =>{
    switch(step){
    case 1:
      const { userDetails } = this.state
      for (let key of Object.keys(userDetails)){
        if (userDetails[key] === ''){
          userDetails['valid'] = false
          this.setState({'userDetails': userDetails})
          return false
        }
      }
      userDetails['valid'] = true
      this.setState({'userDetails': userDetails})
      return true
    case 2:
      const { preferences } = this.state
      for (let key of Object.keys(preferences)){
        if (preferences[key] === ''){
          preferences['valid'] = false
          this.setState({'preferences': preferences})
          return false
        }
      }
      if (preferences['minAge'] > preferences['maxAge'] || preferences['minHeight'] > preferences['maxHeight']){
        preferences['valid'] = false
        this.setState({'preferences': preferences})
        return false
      }
      preferences['valid'] = true
      this.setState({'preferences': preferences})
      return true
    case 3:
      const { part1 } = this.state
      for (let key of Object.keys(part1)){
        if (part1[key] === ''){
          part1['valid'] = false
          this.setState({'part1': part1})
          return false
        }
      }
      part1['valid'] = true
      this.setState({'part1': part1})
      return true
    case 4:
      const { part2 } = this.state
      for (let key of Object.keys(part2)){
        if (part2[key] === ''){
          part2['valid'] = false
          this.setState({'part2': part2})
          return false
        }
      }
      part2['valid'] = true
      this.setState({'part2': part2})
      return true
    case 5:
      const { part3 } = this.state
      for (let key of Object.keys(part3)){
        if (part3[key] === ''){
          part3['valid'] = false
          this.setState({'part3': part3})
          return false
        }
      }
      part3['valid'] = true
      this.setState({'part3': part3})
      return true
    case 6:
      const { contactInfo } = this.state
      for (let key of Object.keys(contactInfo)){
        if (key !== 'valid' && contactInfo[key] !== ''){
          contactInfo['valid'] = true
          this.setState({'contactInfo': contactInfo})
          return true
        }
      }
      contactInfo['valid'] = false
      this.setState({'contactInfo': contactInfo})
      return false
    default:
      return true
    }
  }

  handleUserDetailsChange = input => event => {
    const { userDetails } = this.state;
    if(input === "age"){
      userDetails[input] =  Number(event.target.value)
    } else {
      userDetails[input] =  event.target.value
    }
    userDetails['valid'] = true
    this.setState({ 'userDetails' : userDetails})
  }

  handlePreferencesChange = input => event => {
    const { preferences } = this.state;
    if(input === "minAge" || input === "maxAge"){
      preferences[input] =  Number(event.target.value)
    } else {
      preferences[input] =  event.target.value
    }
    preferences['valid'] = true
    this.setState({ 'preferences' : preferences})
  }

  handlePart1Change = input => (event, value) => {
    const { part1 } = this.state;
    part1[input] =  value.value
    part1['valid'] = true
    this.setState({ 'part1' : part1})
  }

  handlePart3Change = input => (event, value) => {
    const { part3 } = this.state;
    part3[input] =  Number(value.value);
    part3['valid'] = true
    this.setState({ 'part3' : part3})
  }

  handleContactInfoChange = input => (event, value) => {
    const { contactInfo } = this.state;
    contactInfo[input] =  value.value
    contactInfo['valid'] = true
    this.setState({ 'contactInfo' : contactInfo})
  }

  handleUserDetailsDropdownChange = input => (event, data) => {
    const { userDetails } = this.state;
    userDetails[input] =  data.value
    userDetails['valid'] = true
    this.setState({ 'userDetails' : userDetails})
  }

  handlePreferencesDropdownChange = input => (event, data) => {
    const { preferences } = this.state;
    preferences[input] =  data.value
    preferences['valid'] = true
    this.setState({ 'preferences' : preferences})
  }

  handlePart1DropdownChange = input => (event, data) => {
    const { part1 } = this.state;
    part1[input] =  data.value
    part1['valid'] = true
    this.setState({ 'part1' : part1})
  }

  handlePart2DropdownChange = input => (event, data) => {
    const { part2 } = this.state;
    part2[input] =  data.value
    part2['valid'] = true
    this.setState({ 'part2' : part2})
  }

  render(){
    const {step} = this.state;
    const { userDetails, preferences, part1, part2, part3, contactInfo } = this.state;
    const values = { userDetails, preferences, part1, part2, part3, contactInfo};
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
          handleChange = {this.handlePart1Change}
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
      return <ContactInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange = {this.handleContactInfoChange}
          values={values.contactInfo}
          />
    case 7:
      return <Confirmation
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          backToUserDetails={this.backToUserDetails}
          backToPreferences={this.backToPreferences}
          values={values}
          />
    case 8:
      return <Success />
    default:
      return
    }
  }
}

export default MainForm;