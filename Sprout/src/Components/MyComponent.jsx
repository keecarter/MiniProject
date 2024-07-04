import React, { Component } from 'react';
import axios from 'axios';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('https://api.example.com/data')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        {/* Render your component based on this.state.data */}
      </div>
    );
  }
}

export default MyComponent;