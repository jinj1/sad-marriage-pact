// Preferences.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { ETHNICITIES_OPTIONS, GENDER_OPTIONS, HEIGHT_OPTIONS } from './Options';

class Preferences extends Component{
    saveAndContinue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render(){
      const { values } = this.props
      return(
      <Form onSubmit={this.saveAndContinue} >
        <h1 className="ui centered">Enter Preferences</h1>
        <Form.Input 
          label='Minimum Age'
          required={true}
          placeholder='Age'
          type='number'
          min='18' max='100'
          onChange={this.props.handleChange('minAge')}
          defaultValue={values.age}
        />
        <Form.Input
          label='Maximum Age'
          required={true}
          placeholder='Age'
          type='number'
          min='18' max='100'
          onChange={this.props.handleChange('maxAge')}
          defaultValue={values.age}
        />
        <Form.Select
          required={true}
          label='Minumum Height'
          options={[{'key': 'N/A', 'text': 'No Preference', 'value': 'N/A'}].concat(HEIGHT_OPTIONS)}
          placeholder='Select your Height (CM)'
          onChange={this.props.handleDropdownChange('minHeight')}
          defaultValue={values.minHeight}
        />
        <Form.Select
          required={true}
          label='Maximum Height'
          options={[{'key': 'N/A', 'text': 'No Preference', 'value': 'N/A'}].concat(HEIGHT_OPTIONS)}
          placeholder='Select your Height (CM)'
          onChange={this.props.handleDropdownChange('maxHeight')}
          defaultValue={values.maxHeight}
        />
        <Form.Select
          required={true}
          multiple selection
          label='What are you looking for?'
          options={GENDER_OPTIONS}
          placeholder='Select all gender preferences'
          onChange={this.props.handleDropdownChange('genders')}
          defaultValue={values.genders}
        />
        <Form.Select
          search
          multiple selection
          required={true}
          label='Asian Ethnicity'
          options={[{'key': 'N/A', 'text': 'No Preference', 'value': 'N/A'}].concat(ETHNICITIES_OPTIONS)}
          placeholder='What kind of asian are you?'
          onChange={this.props.handleDropdownChange('ethnicities')}
          defaultValue={values.ethnicities}
        />
        <Button onClick={this.back}>Back</Button>
        <Button type='submit'>Save And Continue </Button>
      </Form>
      )
    }
}

export default Preferences;