// QuestionairePart2.jsx
import React, { Component } from 'react';
import { Grid, Form, Message, Button } from 'semantic-ui-react';
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
        <div>
          <h1 className="ui centered">Questionaire Part 2</h1>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={11}>
                <Form 
                size='large'
                error>
                  <Form.Select
                  upward={false}
                  label='How often do you drink?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you drink?'
                  onChange={this.props.handleDropdownChange('drink')}
                  defaultValue={values.drink}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you smoke?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you smoke?'
                  onChange={this.props.handleDropdownChange('smoke')}
                  defaultValue={values.smoke}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you consume some form of marijuana?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you some form of marijuana?'
                  onChange={this.props.handleDropdownChange('weed')}
                  defaultValue={values.weed}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you consume a drug that is not marijuana?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you consume a drug that is not marijuana?'
                  onChange={this.props.handleDropdownChange('drug')}
                  defaultValue={values.drug}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you rave?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you rave?'
                  onChange={this.props.handleDropdownChange('rave')}
                  defaultValue={values.rave}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you eat out?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you eat out?'
                  onChange={this.props.handleDropdownChange('eatOut')}
                  defaultValue={values.eatOut}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you cook?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you cook?'
                  onChange={this.props.handleDropdownChange('cook')}
                  defaultValue={values.cook}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you get bubble tea?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you bubble tea?'
                  onChange={this.props.handleDropdownChange('boba')}
                  defaultValue={values.boba}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you hit the gym/workout?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you hit the gym?'
                  onChange={this.props.handleDropdownChange('workout')}
                  defaultValue={values.workout}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you read?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do read?'
                  onChange={this.props.handleDropdownChange('read')}
                  defaultValue={values.read}
                  />
                  <Form.Select
                  upward={false}
                  label='How often do you watch tv/streaming service?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often do you watch tv/streaming service?'
                  onChange={this.props.handleDropdownChange('tv')}
                  defaultValue={values.tv}
                  />
                  <Form.Select
                  upward={false}
                  label='How often would you want to have sex?'
                  required={true}
                  options={FREQUENCY_OPTIONS}
                  placeholder='How often would you want to have sex?'
                  onChange={this.props.handleDropdownChange('sex')}
                  defaultValue={values.sex}
                  /> 
                  <Message
                  hidden ={values.valid}
                  error
                  header='Error unanswered question'
                  content='Please make sure you have answered all questions'
                  />
                  <div className="row justify-content-center">
                    <Button onClick={this.back}>Back</Button>
                    <Button onClick={this.saveAndContinue}>Save And Continue </Button>
                  </div>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div> 
      )
    }
}

export default QuestionairePart2;