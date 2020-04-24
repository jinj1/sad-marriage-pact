// ContactInfo.jsx
import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';

class ContactInfo extends Component{
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
      <Form error>
        <h1 className="ui centered">Final Step: How do you want your match to contact you?</h1>
        <Form.Input
          label="Snapchat"
          placeholder='Snapchat Username'
          onChange={this.props.handleChange('snapchat')}
          defaultValue={values.snapchat}
        />
        <Form.Input
          label="Instagram"
          placeholder='Instagram Handle'
          onChange={this.props.handleChange('instagram')}
          defaultValue={values.instagram}
        />
        <Form.Input
          label="Facebook"
          placeholder='Link to Facebook Profile'
          onChange={this.props.handleChange('facebook')}
          defaultValue={values.facebook}
        />
        <Form.Input
          label="Email"
          placeholder='Email Address'
          onChange={this.props.handleChange('email')}
          defaultValue={values.email}
        />
        <Form.TextArea 
          label='Other'
          placeholder=''
          onChange={this.props.handleChange('other')}
          defaultValue={values.other}>
        </Form.TextArea>
        <Message
          hidden ={values.valid}
          error
          header='Error no form of contact provided'
          content='Please make sure you have provided at least one from of contact'
        />
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Submit your infomation </Button>
      </Form>
      )
    }
}

export default ContactInfo;