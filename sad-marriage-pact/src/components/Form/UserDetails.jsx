// UserDetails.js
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { COUNTRY_OPTIONS, ETHNICITIES_OPTIONS, GENDER_OPTIONS, HEIGHT_OPTIONS} from './Options';

class UserDetails extends Component{

    saveAndContinue = (e) => {
      e.preventDefault()
      this.props.nextStep()
    }

    render(){
      const { values } = this.props;
      return(
        <Form onSubmit={this.saveAndContinue}>
          <h1 className="ui centered">Enter User Details</h1>
          <Form.Input
            label="First Name"
            required={true}
            placeholder='First Name'
            onChange={this.props.handleChange('firstName')}
            defaultValue={values.firstName}
            validators={['required']} 
          />
          <Form.Input
            label="Last Name"
            required={true}
            placeholder='Last Name'
            onChange={this.props.handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <Form.Input
            label="Email Address"
            required={true}
            type='email'
            placeholder='Email Address'
            onChange={this.props.handleChange('email')}
            defaultValue={values.email}
          />
          <Form.Input
            label="Age"
            required={true}
            placeholder='Age'
            type='number'
            min="18" max="100"
            onChange={this.props.handleChange('age')}
            defaultValue={values.age}
          />
          <Form.Select
            label='Height'
            required={true}
            name='height'
            options={HEIGHT_OPTIONS}
            placeholder='Select your Height (CM)'
            onChange={this.props.handleDropdownChange('height')}
            defaultValue={values.height}
          />
          <Form.Select
            label='Gender'
            required={true}
            id='gender'
            options={GENDER_OPTIONS}
            placeholder='Select your Gender'
            onChange={this.props.handleDropdownChange('gender')}
            defaultValue={values.gender}
          />
          <Form.Select
            search
            label='Current Location'
            required={true}
            options={COUNTRY_OPTIONS}
            placeholder='Which country are you currently located in?'
            onChange={this.props.handleDropdownChange('country')}
            defaultValue={values.country}
          />
          <Form.Select
            search
            multiple selection
            label='Asian Ethnicity'
            required={true}
            options={ETHNICITIES_OPTIONS}
            placeholder='What kind of asian are you?'
            onChange={this.props.handleDropdownChange('ethnicities')}
            defaultValue={values.ethnicities}
          />
          <Button type="submit">Save And Continue </Button>
        </Form>
      )
    }
}

export default UserDetails;