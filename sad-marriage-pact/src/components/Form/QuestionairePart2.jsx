// QuestionairePart2.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { FREQUENCY_OPTIONS } from './Options'

class QuestionairePart2 extends Component{
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
              label='How often do you drink?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you drink?'
              onChange={this.props.handleDropdownChange('drink')}
              defaultValue={values.drink}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you rave?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you rave?'
              onChange={this.props.handleDropdownChange('rave')}
              defaultValue={values.rave}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you eat out?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you eat out?'
              onChange={this.props.handleDropdownChange('eatOut')}
              defaultValue={values.eatOut}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you cook?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you cook?'
              onChange={this.props.handleDropdownChange('cook')}
              defaultValue={values.cook}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you get bubble tea?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you bubble tea?'
              onChange={this.props.handleDropdownChange('boba')}
              defaultValue={values.boba}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you hit the gym/workout?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you hit the gym?'
              onChange={this.props.handleDropdownChange('gym')}
              defaultValue={values.gym}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you read?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do read?'
              onChange={this.props.handleDropdownChange('read')}
              defaultValue={values.read}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often do you watch tv/streaming service?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often do you watch tv/streaming service?'
              onChange={this.props.handleDropdownChange('tv')}
              defaultValue={values.tv}
            />
          </Form.Field>
          <Form.Field>
            <Form.Select
              label='How often would you want to have sex?'
              required={true}
              options={FREQUENCY_OPTIONS}
              placeholder='How often would you want to have sex?'
              onChange={this.props.handleDropdownChange('sex')}
              defaultValue={values.sex}
            />
          </Form.Field>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
      )
    }
}

export default QuestionairePart2;