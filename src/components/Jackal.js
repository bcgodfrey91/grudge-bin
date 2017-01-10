import React, { Component } from 'react';
import '../App.css'

class Jackal extends Component {
  render() {
    const { jackal } = this.props
    return (
      <div className="jackal-container">
        <h2 className="jackal-name">{jackal.name}</h2>
        <p className="jackal-reason">{jackal.reason}</p>
        <button
        >Forgive Jackal</button>
      </div>
    );
  }
}

export default Jackal;
