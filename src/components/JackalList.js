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
    return (
      <div className="jackal-list-container">
        {this.renderJackals()}
      </div>
    );
  }
}

export default JackalList;
