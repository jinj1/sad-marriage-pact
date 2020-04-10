// QuestionairePart3.jsx
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './Questionaire.css'

class QuestionairePart3 extends Component{
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
        <h1 className="ui centered">Questionaire Part 3</h1>
        <label className="group_label">On a scale of 1 to 5 how white washed are you?</label>
        <Form.Group widths='equal'>
          {['1(FOB)', '2', '3', '4', '5(White)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('white')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('white')}/>}
          })}
        </Form.Group>
        <Button onClick={this.back}>Back</Button>
        <Button type='submit'>Save And Continue </Button>
      </Form>
      )
    }
}

export default QuestionairePart3;