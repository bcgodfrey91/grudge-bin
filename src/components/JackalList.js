import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css'
import axios from 'axios'

class JackalList extends Component {

  renderJackals() {
    return this.props.jackals.map((jackal, index) => {
      return(
        <div key={index}>
          <Link
            to={`jackals/${jackal.id}`}
            className="link-to-jackal"
          >
            <h1>{jackal.name}</h1>
          </Link>
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
