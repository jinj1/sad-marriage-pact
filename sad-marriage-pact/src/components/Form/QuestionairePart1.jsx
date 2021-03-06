// QuestionairePart1.jsx
import React, { Component } from 'react';
import { Grid, Form, Message, Button, Select } from 'semantic-ui-react';
import {MAJOR_OPTIONS, GPA_OPTIONS, SALARY_OPTIONS, NUMBER_OPTIONS, RELIGIOUS_OPTIONS, LOVE_LANG_OPTIONS, FOOD_OPTIONS} from './Options'
import './Questionaire.css'

class QuestionairePart1 extends Component{
    componentDidMount(){
      window.scrollTo(0,0);
    }
    
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
          <h1 className="ui centered">Questionnaire Part 1</h1><br></br>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={11}>
                <Form 
                size='large'
                error>
                  <Form.Select
                  upward={false}
                  search
                  multiple selection
                  label='What is/was your college major?'
                  required={true}
                  options={MAJOR_OPTIONS}
                  placeholder='What is/was your college major?'
                  onChange={this.props.handleDropdownChange('major')}
                  defaultValue={values.major}
                  />
                  <Form.Select
                  upward={false}
                  label='What is/was your college GPA?'
                  required={true}
                  options={GPA_OPTIONS}
                  placeholder='What is/was your college GPA?'
                  onChange={this.props.handleDropdownChange('gpa')}
                  defaultValue={values.gpa}
                  />
                  <Form.Select
                  upward={false}
                  label='What is your ideal salary (USD)?'
                  required={true}
                  options={SALARY_OPTIONS}
                  placeholder='What is your ideal salary (USD)?'
                  onChange={this.props.handleDropdownChange('salary')}
                  defaultValue={values.salary}
                  />
                  <Form.Select
                  upward={false}
                  label='How many kids would you want in the future?'
                  required={true}
                  options={NUMBER_OPTIONS}
                  placeholder='How many kids would you want in the future?'
                  onChange={this.props.handleDropdownChange('kids')}
                  defaultValue={values.kids}
                  />
                  <Form.Select
                  upward={false}
                  label='How many pets would you want in the future?'
                  required={true}
                  options={NUMBER_OPTIONS}
                  placeholder='How many pets would you want in the future?'
                  onChange={this.props.handleDropdownChange('pets')}
                  defaultValue={values.pets}
                  />
                  <Form.Select
                  upward={false}
                  label='What is your religion?'
                  required={true}
                  options={RELIGIOUS_OPTIONS}
                  placeholder='What is your religion?'
                  onChange={this.props.handleDropdownChange('religion')}
                  defaultValue={values.religion}
                  />
                  <Form.Field required={true}>
                    <label className="group_label"> 
                      What is your top love language? 
                      <a href="https://www.5lovelanguages.com/quizzes/singles-quiz/" rel="noopener noreferrer" target="_blank"> (Take the quiz here.)</a>
                    </label>
                    < Select
                    upward={false}
                    options={LOVE_LANG_OPTIONS}
                    placeholder='What is your top love language?'
                    onChange={this.props.handleDropdownChange('loveLang')}
                    defaultValue={values.loveLang}
                    />
                  </Form.Field>
                  <Form.Select
                  upward={false}
                  label='Which do you prefer: hotpot, dim sum or kbbq?'
                  required={true}
                  options={FOOD_OPTIONS}
                  placeholder='Which do u prefer: hotpot, dim sum or kbbq?'
                  onChange={this.props.handleDropdownChange('hotpot')}
                  defaultValue={values.hotpot}
                  />
                  <Form.Input 
                  label='How many cups of water do you add per cup of rice?'
                  required={true}
                  placeholder='Cup'
                  type='number'
                  min='0' max='5'
                  onChange={this.props.handleChange('rice')}
                  defaultValue={values.rice}
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

export default QuestionairePart1;