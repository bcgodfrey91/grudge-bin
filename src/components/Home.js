import React, { Component } from 'react';
import JackalList from './JackalList'
import axios from 'axios'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      reason: '',
      jackals: null
    };
  };

  componentWillMount() {
    this.fetchJackals();
  }

  updateName(e) {
    const inputValue = e.target.value
    this.setState({name: inputValue});
  }

  updateReason(e) {
    const inputValue = e.target.value
    this.setState({reason: inputValue});
  }

  fetchJackals() {
    axios.get('/jackals', {})
    .then((response) => {
      this.setState({ jackals: response.data.jackals });
    });
  }

  addJackal(e, name, reason) {
    e.preventDefault()
    axios.post('/jackals', { name: name, reason: reason })
    .then(() => {
      console.log('Response received');
    })
    .catch(() => {
      console.log('Invalid request');
    })
  }

  forgiveJackal() {
    /// patch request
  }

  render() {
    const { name, response, jackals } = this.state
    return (
      <div className="home">
        <div className="add-jackal-container">
          <form
          className="add-jackal-form"
          onSubmit={(e) => this.addJackal(e, name, response)}
          >
            <input
            className="jackal-name"
            placeholder="name"
            onChange={(e) => this.updateName(e)}
            />
            <input
            className="reasoning"
            placeholder="reason"
            onChange={(e) => this.updateReason(e)}
            />
            <input
            type="submit"
            value="Submit"
            />
          </form>
        </div>
        <div className="list-of-jackals">
          <JackalList
            jackals={jackals}
          />
        </div>
      </div>
    );
  }
}

export default Home;
