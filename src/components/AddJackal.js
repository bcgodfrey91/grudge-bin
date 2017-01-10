import React, { Component } from 'react';

class AddJackal extends Component {
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

  addJackal() {
    const jackal = {
      name: this.state.name,
      reason: this.state.reason,
      forgiven: false
    }

    this.setState({jackals: this.state.jackals.concat(jackal) })
  }

  render() {
    const { name, reason } = this.state
    return (
      <div className="add-jackal-container">
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
          onClick={() => this.addJackal()}
          />
      </div>
    );
  }
}

export default AddJackal;
