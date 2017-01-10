import React, { Component } from 'react';
import JackalList from './JackalList'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      reason: '',
      jackals: []
    }
  }

  updateName(e) {
    const inputValue = e.target.value
    this.setState({name: inputValue})
  }

  updateReason(e) {
    const inputValue = e.target.value
    this.setState({reason: inputValue})
  }

  addJackal(e) {
    e.preventDefault()
    const jackal = {
      name: this.state.name,
      reason: this.state.reason,
      forgiven: false
    }

    this.setState({jackals: this.state.jackals.concat(jackal) })
  }

  render() {
    const { jackals } = this.state
    return (
      <div className="home">
        <div className="add-jackal-container">
          <form
          className="add-jackal-form"
          onSubmit={(e) => this.addJackal(e)}
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
