import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';

class SetlistFinder extends Component {
  state = {
    date: null
  };

  handleChange = (event, date) => {
    this.setState({
      date: date
    });
  };

  render() {
    return (
      <div>
        <h3>Find a show</h3>
        <DatePicker
          value={this.state.date}
          onChange={this.handleChange}
          hintText="Select a date"
          openToYearSelection={true}
        />
      </div>
    );
  }
}

export default SetlistFinder;
