import React, { Component } from 'react';
import Jackal from './Jackal'
import '../App.css'

class JackalList extends Component {
  renderJackals() {
    return this.props.jackals.map((jackal, index) => {
      return(
        <div key={index}>
          <h1>{jackal.name}</h1>
        </div>
      )
    })
  }


  render() {
    const { jackals } = this.props
    return (
      <div className="jackal-list-container">
        { jackals ? this.renderJackals() : null }
      </div>
    );
  }
}

export default JackalList;
