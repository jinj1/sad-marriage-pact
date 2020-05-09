// Confirmation.jsx
import React, { Component } from 'react';
import { Grid, Button, Table } from 'semantic-ui-react';
import {
  COUNTRY_OPTIONS, ETHNICITIES_OPTIONS, GENDER_OPTIONS, HEIGHT_OPTIONS,
} from './Options';

class Confirmation extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  backToUserDetails = (e) => {
    e.preventDefault();
    this.props.backToUserDetails();
  }

  backToPreferences = (e) => {
    e.preventDefault();
    this.props.backToPreferences();
  }

  render() {
    const { values: { userDetails, preferences, contactInfo } } = this.props;
    return (
      <div>
        <h1 className="ui centered">Please Confirm Your Information And Preferences</h1><br></br>

        <Grid>
          <Grid.Row centered>
            <Grid.Column width={11}>
              <Table celled size="large">
                <Table.Header>
                  <Table.Row><Table.HeaderCell colSpan="2">User Details</Table.HeaderCell></Table.Row>
                </Table.Header>
                <Table.Body>
                  {['First Name', 'Last Name', 'Email', 'Age', 'Height', 'Gender', 'Current Location', 'Ethnicities'].map((value, index) => {
                    switch (index) {
                      case 4:
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{HEIGHT_OPTIONS[HEIGHT_OPTIONS.findIndex((h) => h.value === userDetails[Object.keys(userDetails)[index]])].text}</Table.Cell>
                          </Table.Row>
                        );
                      case 5:
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{GENDER_OPTIONS[GENDER_OPTIONS.findIndex((g) => g.value === userDetails[Object.keys(userDetails)[index]])].text}</Table.Cell>
                          </Table.Row>
                        );
                      case 6: {
                        let locs = [];
                        for (const country of userDetails[Object.keys(userDetails)[index]]) {
                          locs.push(COUNTRY_OPTIONS[COUNTRY_OPTIONS.findIndex((c) => c.value === country)].text);
                        }
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{locs.map((loc) => <li key={loc}>{loc}</li>)}</Table.Cell>
                          </Table.Row>
                        );
                      }
                      case 7: {
                        let ethn = [];
                        for (const ethnicity of userDetails[Object.keys(userDetails)[index]]) {
                          ethn.push(ETHNICITIES_OPTIONS[ETHNICITIES_OPTIONS.findIndex((e) => e.value === ethnicity)].text);
                        }
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{ethn.map((et) => <li key={et}>{et}</li>)}</Table.Cell>
                          </Table.Row>
                        );
                      }
                      default:
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{userDetails[Object.keys(userDetails)[index]]}</Table.Cell>
                          </Table.Row>
                        );
                    }
                  })}
                </Table.Body>
              </Table>
              <div className="row justify-content-center">
                <Button onClick={this.backToUserDetails}>Back to User Details</Button>
              </div>
              <Table celled size="large">
                <Table.Header>
                  <Table.Row><Table.HeaderCell colSpan="2">Preferences</Table.HeaderCell></Table.Row>
                </Table.Header>
                <Table.Body>
                  {['Minimum Age', 'Maximum Age', 'Minimum Height', 'Maximum Height', 'Genders', 'Ethnicities'].map((value, index) => {
                    switch (index) {
                      case 2: {
                        const mih = [{ key: 'N/A', text: 'No Preference', value: 148 }].concat(HEIGHT_OPTIONS);
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{mih[mih.findIndex((h) => h.value === preferences[Object.keys(preferences)[index]])].text}</Table.Cell>
                          </Table.Row>
                        );
                      }
                      case 3: {
                        const mxh = [{ key: 'N/A', text: 'No Preference', value: 202 }].concat(HEIGHT_OPTIONS);
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{mxh[mxh.findIndex((h) => h.value === preferences[Object.keys(preferences)[index]])].text}</Table.Cell>
                          </Table.Row>
                        );
                      }
                      case 4: {
                        let genders = [];
                        for (const gender of preferences[Object.keys(preferences)[index]]) {
                          genders.push(GENDER_OPTIONS[GENDER_OPTIONS.findIndex((g) => g.value === gender)].text);
                        }
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{genders.map((gender) => <li key={gender}>{gender}</li>)}</Table.Cell>
                          </Table.Row>
                        );
                      }
                      case 5: {
                        let ethn = [];
                        const eo = [{ key: 'N/A', text: 'No Preference', value: 'N/A' }].concat(ETHNICITIES_OPTIONS);
                        for (const ethnicity of preferences[Object.keys(preferences)[index]]) {
                          ethn.push(eo[eo.findIndex((e) => e.value === ethnicity)].text);
                        }
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{ethn.map((et) => <li key={et}>{et}</li>)}</Table.Cell>
                          </Table.Row>
                        );
                      }
                      default:
                        return (
                          <Table.Row key={value}>
                            <Table.Cell width={6}><b>{value}</b></Table.Cell>
                            <Table.Cell width={10}>{preferences[Object.keys(preferences)[index]]}</Table.Cell>
                          </Table.Row>
                        );
                    }
                  })}
                </Table.Body>
              </Table>
              <div className="row justify-content-center">
                <Button onClick={this.backToPreferences}>Back to Preferences</Button>
              </div>
              <Table celled size="large">
                <Table.Header>
                  <Table.Row><Table.HeaderCell colSpan="2">Contact Information</Table.HeaderCell></Table.Row>
                </Table.Header>
                <Table.Body>
                  {['Snapchat', 'Instagram', 'Facebook', 'Email', 'Other'].map((value, index) => (
                    <Table.Row key={value}>
                      <Table.Cell width={6}><b>{value}</b></Table.Cell>
                      <Table.Cell width={10}>{contactInfo[Object.keys(contactInfo)[index]]}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <div className="row justify-content-center">
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Submit</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
export default Confirmation;
