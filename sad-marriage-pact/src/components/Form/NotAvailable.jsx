// Success.js
import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

class NotAvailable extends Component {
  render() {
    return (
      <div>
      <h1 className="ui centered">Sorry but the survey is not long avaliable</h1><br></br>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={11}>
              <div className="row justify-content-center">
              <a href="/"><Button>Back to homepage</Button></a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default NotAvailable;
