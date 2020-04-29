// QuestionairePart3.jsx
import React, { Component } from 'react';
import { Grid, Form, Message, Button } from 'semantic-ui-react';
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
      console.log(values)
      return(
        <div>
          <h1 className="ui centered">Questionaire Part 3</h1>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={11}>
                <Form 
                size='large'
                error>
                  <label className="group_label">On a scale of 1 to 5 how white washed are you?</label>
                  <Form.Group widths='equal'>
                    {['1(FOB)', '2', '3', '4', '5(White)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.white === value} onChange={this.props.handleChange('white')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.white === value} onChange={this.props.handleChange('white')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">On a scale of 1 to 5 how much of a weeb are you?</label>
                  <Form.Group widths='equal'>
                    {['1(What\'s anime?)', '2', '3', '4', '5(Full Weeb)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.weeb === value} onChange={this.props.handleChange('weeb')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.weeb === value} onChange={this.props.handleChange('weeb')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">On a scale of 1 to 5 how into kpop are you?</label>
                  <Form.Group widths='equal'>
                    {['1(Dispise it)', '2', '3', '4', '5(Obsessed)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.kpop === value} onChange={this.props.handleChange('kpop')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.kpop === value} onChange={this.props.handleChange('kpop')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">On a scale of 1 to 5 how strict would you be as a parent?</label>
                  <Form.Group widths='equal'>
                    {['1(Lax)', '2', '3', '4', '5(Tiger parent)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.parent === value} onChange={this.props.handleChange('parent')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.parent === value} onChange={this.props.handleChange('parent')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">On a scale of 1 to 5 how high matainence are you?</label>
                  <Form.Group widths='equal'>
                    {['1(Low maintainence)', '2', '3', '4', '5(High maintainence)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.maintainence === value} onChange={this.props.handleChange('maintainence')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.maintainence === value} onChange={this.props.handleChange('maintainence')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">On a scale of 1 to 5 how late are you to things?</label>
                  <Form.Group widths='equal'>
                    {['1(Early)', '2', '3', '4', '5(Fashionably late)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.arrival === value} onChange={this.props.handleChange('arrival')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.arrival === value} onChange={this.props.handleChange('arrival')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">On a scale of 1 to 5 how clean are you?</label>
                  <Form.Group widths='equal'>
                    {['1(Slob)', '2', '3', '4', '5(Neat Freak)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.cleaniness === value} onChange={this.props.handleChange('cleaniness')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.cleaniness === value} onChange={this.props.handleChange('cleaniness')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">How emotionally incompetent are you due to lack of parental love ?</label>
                  <Form.Group widths='equal'>
                    {['1(Emotionally Compotent)', '2', '3', '4', '5(Emotionally Incompotent)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.emotion === value} onChange={this.props.handleChange('emotion')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.emotion === value} onChange={this.props.handleChange('emotion')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">Where do you lie: wholesome vs hoesome ?</label>
                  <Form.Group widths='equal'>
                    {['1(Wholesome)', '2', '3', '4', '5(Hoesome)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.wholesome === value} onChange={this.props.handleChange('wholesome')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.wholesome === value} onChange={this.props.handleChange('wholesome')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">Where do you lie: introvert vs extrovert ?</label>
                  <Form.Group widths='equal'>
                    {['1(Introvert)', '2', '3', '4', '5(Extrovert)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.personality === value} onChange={this.props.handleChange('personality')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.personality === value} onChange={this.props.handleChange('personality')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">Where do you lie: liberal vs conservative ?</label>
                  <Form.Group widths='equal'>
                    {['1(Liberal)', '2', '3', '4', '5(Conservative)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.politics === value} onChange={this.props.handleChange('politics')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.politics === value} onChange={this.props.handleChange('politics')}/>}
                    })}
                  </Form.Group>
                  <div className="ui divider"></div>
                  <label className="group_label">Where do you lie: hookup vs committed relationship ?</label>
                  <Form.Group widths='equal'>
                    {['1(Hookup)', '2', '3', '4', '5(Committed)'].map((value, index) => {
                      if (index === 0){return <Form.Radio required={true} label={value} key={index} value={value} checked={values.commitment === value} onChange={this.props.handleChange('commitment')}/>}
                      else{return <Form.Radio label={value} key={index} value={value} checked={values.commitment === value} onChange={this.props.handleChange('commitment')}/>}
                    })}
                  </Form.Group>
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

export default QuestionairePart3;