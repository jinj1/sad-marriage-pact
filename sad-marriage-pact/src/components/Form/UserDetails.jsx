// UserDetails.js
import React, { Component } from 'react';
import { Grid, Form, Message, Button } from 'semantic-ui-react';
import { COUNTRY_OPTIONS, ETHNICITIES_OPTIONS, GENDER_OPTIONS, HEIGHT_OPTIONS} from './Options';

class UserDetails extends Component{
    componentDidMount(){
      window.scrollTo(0,0);
    }

    saveAndContinue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    render(){
      const { values } = this.props;
      return(
        <div>
          <h1 className="ui centered">Enter User Details</h1><br></br>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={11}>
                <Form 
                error
                size='large'
                onSubmit={this.saveAndContinue}>
                  <Form.Group>
                    <Form.Input
                    width={8}
                    maxLength={100}
                    label="First Name"
                    required={true}
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                    <Form.Input
                    width={8}
                    maxLength={100}
                    label="Last Name"
                    required={true}
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                  </Form.Group>
                  <Form.Input
                  label="Email Address"
                  maxLength={320}
                  required={true}
                  type='email'
                  placeholder='Email Address'
                  onChange={this.props.handleChange('email')}
                  defaultValue={values.email}
                  />
                  <Form.Group>
                    <Form.Input
                    width={6}
                    label="Age"
                    required={true}
                    placeholder='Age'
                    type='number'
                    min="18" max="100"
                    onChange={this.props.handleChange('age')}
                    defaultValue={values.age}
                    />
                    <Form.Select
                    upward={false}
                    width={10}
                    search
                    label='Height'
                    required={true}
                    name='height'
                    options={HEIGHT_OPTIONS}
                    placeholder='Select your Height (CM)'
                    onChange={this.props.handleDropdownChange('height')}
                    defaultValue={values.height}
                    />
                  </Form.Group>
                  <Form.Select
                  upward={false}
                  label='Gender'
                  required={true}
                  id='gender'
                  options={GENDER_OPTIONS}
                  placeholder='Select your Gender'
                  onChange={this.props.handleDropdownChange('gender')}
                  defaultValue={values.gender}
                  />
                  <Form.Select
                  upward={false}
                  search
                  multiple selection
                  label='Current Location (Select all that apply)'
                  required={true}
                  options={COUNTRY_OPTIONS}
                  placeholder='Which country are you currently located in?'
                  onChange={this.props.handleDropdownChange('country')}
                  defaultValue={values.country}
                  />
                  <Form.Select
                  upward={false}
                  search
                  multiple selection
                  label='Asian Ethnicity (Select all that apply)'
                  required={true}
                  options={ETHNICITIES_OPTIONS}
                  placeholder='What asian ethnicity do you identify with?'
                  onChange={this.props.handleDropdownChange('ethnicities')}
                  defaultValue={values.ethnicities}
                  />
                  <Message
                  hidden ={values.valid}
                  error
                  header='Error unanswered question'
                  content='Please make sure you have answered all questions'
                  />
                  <div className="row justify-content-center">
                    <Button type="submit">Save And Continue </Button>
                  </div>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
}

export default UserDetails;