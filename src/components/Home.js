import React, { Component } from 'react';
import JackalList from './JackalList'
import axios from 'axios'
import '../App.css'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      reason: '',
      jackals: null
    };
  };

  componentDidMount() {
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
    axios.get('https://bg-grudge-bin.herokuapp.com/jackals')
    .then((response) => {
      this.setState({ jackals: response.data.jackals });
    });
  }

  addJackal(name, reason) {
    axios.post('https://bg-grudge-bin.herokuapp.com/jackals', { name: name, reason: reason })
    .then(() => {
      console.log('Response received');
    })
    .catch(() => {
      console.log('Invalid request');
    })
  }


  render() {
    const { name, reason, jackals } = this.state
    return (
      <div className="home">
        <header className="add-jackal-container">
          <form
          className="add-jackal-form"
          onSubmit={(e) => this.addJackal(name, reason)}
          >
            <input
            className="jackal-name"
            placeholder="Name"
            onChange={(e) => this.updateName(e)}
            />
            <input
            className="reasoning"
            placeholder="Reason"
            onChange={(e) => this.updateReason(e)}
            />
            <input
            className="submit-button"
            type="submit"
            value="Submit"
            />
          </form>
        </header>
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
