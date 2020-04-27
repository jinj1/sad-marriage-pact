// Preferences.jsx
import React, { Component } from 'react';
import { Grid, Form, Message, Button } from 'semantic-ui-react';
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
        <div>
          <h1 className="ui centered">Enter Preferences</h1>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={11}>
                <Form 
                error
                size='large'
                onSubmit={this.saveAndContinue} >
                  <Form.Group>
                    <Form.Input
                    width={8} 
                    label='Minimum Age(Hard requirement)'
                    required={true}
                    placeholder='Age'
                    type='number'
                    min='18' max='100'
                    onChange={this.props.handleChange('minAge')}
                    defaultValue={values.minAge}
                    />
                    <Form.Input
                    width={8}
                    label='Maximum Age(Hard requirement)'
                    required={true}
                    placeholder='Age'
                    type='number'
                    min={values.minAge} max='100'
                    onChange={this.props.handleChange('maxAge')}
                    defaultValue={values.maxAge}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Select
                    upward={false}
                    width={8}
                    search
                    required={true}
                    label='Minumum Height(Hard requirement)'
                    options={[{'key': 'N/A', 'text': 'No Preference', 'value': 148}].concat(HEIGHT_OPTIONS)}
                    placeholder='Select your Height (CM)'
                    onChange={this.props.handleDropdownChange('minHeight')}
                    defaultValue={values.minHeight}
                    />
                    <Form.Select
                    upward={false}
                    width={8}
                    search
                    required={true}
                    label='Maximum Height(Hard requirement)'
                    options={[{'key': 'N/A', 'text': 'No Preference', 'value': 202}].concat(HEIGHT_OPTIONS)}
                    placeholder='Select your Height (CM)'
                    onChange={this.props.handleDropdownChange('maxHeight')}
                    defaultValue={values.maxHeight}
                    />
                  </Form.Group>
                  <Form.Select
                  upward={false}
                  required={true}
                  multiple selection
                  label='What are you looking for?(Hard requirement)'
                  options={GENDER_OPTIONS}
                  placeholder='Select all gender preferences'
                  onChange={this.props.handleDropdownChange('genders')}
                  defaultValue={values.genders}
                  />
                  <Form.Select
                  upward={false}
                  search
                  multiple selection
                  required={true}
                  label='What kind of Asian are you looking for?(Soft requirement)(Select all that apply)'
                  options={[{'key': 'N/A', 'text': 'No Preference', 'value': 'N/A'}].concat(ETHNICITIES_OPTIONS)}
                  placeholder='What kind of Asian are you looking for?'
                  onChange={this.props.handleDropdownChange('ethnicities')}
                  defaultValue={values.ethnicities}
                  />
                   <Message
                  hidden ={values.valid}
                  error
                  header='Error unanswered question or min value greater than max value'
                  content='Please make sure you have answered all questions and that the minimum values are greater than or equal to the maximum values'
                  />
                  <div className="row justify-content-center">
                    <Button onClick={this.back}>Back</Button>
                    <Button type='submit'>Save And Continue </Button>
                  </div>
                </Form>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
}

export default Preferences;