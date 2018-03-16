import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

class SetlistFinder extends Component {
  state = {
    date: null
  };

  style = {
    height: 800,
    width: 500,
    margin: 20,
    padding: 20,
    backgroundColor: 'lightBlue',
    textAlign: 'center',
    display: 'inline-table'
  };

  handleChange = (event, date) => {
    this.setState({
      date: date
    });
  };

  render() {
    return (
      <Paper style={this.style} zDepth={3}>
        <h3>Find a show</h3>
        <DatePicker
          value={this.state.date}
          onChange={this.handleChange}
          hintText="Select a date"
          openToYearSelection={true}
        />
      </Paper>
    );
  }
}

export default SetlistFinder;
