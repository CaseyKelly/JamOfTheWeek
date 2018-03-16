import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class LatestShows extends Component {
  state = {
    latestShow: null
  };

  style = {
    height: 800,
    width: 500,
    margin: 20,
    padding: 20,
    backgroundColor: 'lightBlue',
    display: 'inline-flex'
  };

  async componentDidMount() {
    await this.getLatestShows();
  }

  getLatestShows = async () => {
    try {
      const response = await fetch(
        `https://api.phish.net/v3/setlists/latest?apikey=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const json = await response.json();
      console.log(json.response.data[0]);
      const show = {
        date: json.response.data[0].short_date,
        location: json.response.data[0].location,
        rating: json.response.data[0].rating,
        setlist: json.response.data[0].setlistdata,
        notes: json.response.data[0].setlistnotes,
        venue: json.response.data[0].venue
      };
      this.setState({ latestShow: show });
    } catch (err) {
      console.error('Caught Error: ', err);
    }
  };

  render() {
    return (
      <Paper style={this.style} zDepth={3}>
        {this.state.latestShow ? (
          <div>
            <h2>Most Recent Show:</h2>
            <h3>{this.state.latestShow.date}</h3>
            <h4
              dangerouslySetInnerHTML={{ __html: this.state.latestShow.venue }}
            />
            <h4>{this.state.latestShow.location}</h4>
            <div>Rating: {this.state.latestShow.rating}</div>
            <div
              dangerouslySetInnerHTML={{
                __html: this.state.latestShow.setlist
              }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: this.state.latestShow.notes }}
            />
          </div>
        ) : (
          <div />
        )}
      </Paper>
    );
  }
}

export default LatestShows;
