// Preferences.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import {MAJOR_OPTIONS, GPA_OPTIONS, SALARY_OPTIONS, NUMBER_OPTIONS} from './Options'

class QuestionairePart1 extends Component{
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
      <Form color='blue' >
        <h1 className="ui centered">Questionaire Part 1</h1>
          <Form.Field>
            <Form.Select
              search
              label='What was your college major?'
              required={true}
              options={MAJOR_OPTIONS}
              placeholder='What was your college major?'
              onChange={this.props.handleDropdownChange('major')}
              defaultValue={values.major}
            />
            <Form.Select
              label='What was your college gpa?'
              required={true}
              options={GPA_OPTIONS}
              placeholder='What was your college gpa?'
              onChange={this.props.handleDropdownChange('gpa')}
              defaultValue={values.gpa}
            />
            <Form.Select
              label='What is your ideal salary (USD)?'
              required={true}
              options={SALARY_OPTIONS}
              placeholder='What is your ideal salary (USD)?'
              onChange={this.props.handleDropdownChange('salary')}
              defaultValue={values.salary}
            />
            <Form.Select
              label='How many kids would you want in the future?'
              required={true}
              options={NUMBER_OPTIONS}
              placeholder='How many kids would you want in the future?'
              onChange={this.props.handleDropdownChange('kids')}
              defaultValue={values.kids}
            />
            <Form.Select
              label='How many pets would you want in the future?'
              required={true}
              options={NUMBER_OPTIONS}
              placeholder='How many pets would you want in the future??'
              onChange={this.props.handleDropdownChange('pets')}
              defaultValue={values.pets}
            />
          </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
      )
    }
}

export default QuestionairePart1;