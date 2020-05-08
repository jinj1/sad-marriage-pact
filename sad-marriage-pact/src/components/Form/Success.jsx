// Success.js
import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

class Success extends Component {
  render() {
    return (
      <div>
      <h1 className="ui centered">Details Successfully Saved</h1>
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

export default Success;
