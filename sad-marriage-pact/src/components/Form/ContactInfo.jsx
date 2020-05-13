// ContactInfo.jsx
import React, { Component } from 'react';
import { Grid, Form, Message, Button } from 'semantic-ui-react';

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
        <div>
          <h1 className="ui centered">Final Step: How do you want your match to contact you?</h1><br></br>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={11}>
                <Form 
                size='large'
                error>
                  <Form.Input
                    label="Snapchat"
                    maxLength={30}
                    placeholder='Snapchat Username'
                    onChange={this.props.handleChange('snapchat')}
                    defaultValue={values.snapchat}
                  />
                  <Form.Input
                    label="Instagram"
                    maxLength={30}
                    placeholder='Instagram Handle'
                    onChange={this.props.handleChange('instagram')}
                    defaultValue={values.instagram}
                  />
                  <Form.Input
                    label="Facebook"
                    maxLength={1024}
                    placeholder='Link to Facebook Profile'
                    onChange={this.props.handleChange('facebook')}
                    defaultValue={values.facebook}
                  />
                  <Form.Input
                    label="Email"
                    maxLength={320}
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                  />
                  <Form.TextArea 
                    label='Other'
                    placeholder=''
                    maxLength={1500}
                    onChange={this.props.handleChange('other')}
                    defaultValue={values.other}>
                  </Form.TextArea>
                  <Form.TextArea 
                    label='Leave a Message for your Match.'
                    maxLength={1500}
                    placeholder=''
                    onChange={this.props.handleChange('message')}
                    defaultValue={values.message}>
                  </Form.TextArea>
                  <Message
                    hidden ={values.valid}
                    error
                    header='Error no form of contact provided'
                    content='Please make sure you have provided at least one form of contact'
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

export default ContactInfo;