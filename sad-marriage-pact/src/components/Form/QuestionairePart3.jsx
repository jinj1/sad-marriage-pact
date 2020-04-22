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
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how white washed are you?</label>
          {['1(FOB)', '2', '3', '4', '5(White)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('white')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('white')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how much of a weeb are you?</label>
          {['1(Whats anime?)', '2', '3', '4', '5(Full Weeb)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('weeb')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.weeb === value} onChange={this.props.handleChange('weeb')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how into kpop are you?</label>
          {['1(Neutral)', '2', '3', '4', '5(Obsessed)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('kpop')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.kpop === value} onChange={this.props.handleChange('kpop')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how strict would you be as a parent?</label>
          {['1(Lax)', '2', '3', '4', '5(Tiger parent)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('parent')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.parent === value} onChange={this.props.handleChange('parent')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how high matainence are you?</label>
          {['1(Low maintenance)', '2', '3', '4', '5(High maintenance)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('maintenance')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.maintenance === value} onChange={this.props.handleChange('maintenance')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how late are you to things?</label>
          {['1(Early)', '2', '3', '4', '5(Fashionably late)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('arrival')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.arrival === value} onChange={this.props.handleChange('arrival')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">On a scale of 1 to 5 how clean are you?</label>
          {['1(Slob)', '2', '3', '4', '5(Neat Freak)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('cleaniness')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.cleaniness === value} onChange={this.props.handleChange('cleaniness')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">How emotionally incompetent are you due to lack of parental love ?</label>
          {['1(Emotionally Compotent)', '2', '3', '4', '5(Emotionally Incompotent)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('emotion')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.emotion === value} onChange={this.props.handleChange('emotion')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">Where do you lie: nice guy/ girl vs ABB/ABG ?</label>
          {['1(Nice guy/girl)', '2', '3', '4', '5(ABB/ABG)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('abb')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.abb === value} onChange={this.props.handleChange('abb')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">Where do you lie: introvert vs extrovert ?</label>
          {['1(Introvert)', '2', '3', '4', '5(Extrovert)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('personality')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.personality === value} onChange={this.props.handleChange('personality')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">Where do you lie: liberal vs conservative ?</label>
          {['1(Liberal)', '2', '3', '4', '5(Conservative)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('politics')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.politics === value} onChange={this.props.handleChange('politics')}/>}
          })}
        </Form.Group>
        <Form.Group widths='equal'>
          <label className="group_label">Where do you lie: hookup vs committed relationship ?</label>
          {['1(Hookup)', '2', '3', '4', '5(Committed)'].map((value, index) => {
            if (index === 0){return <Form.Radio required={true} label={value} value={value} checked={values.white === value} onChange={this.props.handleChange('commitment')}/>}
            else{return <Form.Radio label={value} value={value} checked={values.commitment === value} onChange={this.props.handleChange('commmitment')}/>}
          })}
        </Form.Group>
        <Button onClick={this.back}>Back</Button>
        <Button type='submit'>Save And Continue </Button>
      </Form>
      )
    }
}

export default QuestionairePart3;