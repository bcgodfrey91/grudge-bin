import React, { Component } from 'react';
import '../App.css'
import axios from 'axios'

class Jackal extends Component {
  constructor() {
    super()
    this.state = {
      jackal: ''
    };
  };

  componentDidMount() {
    this.getThisJackal()
  }

  getThisJackal() {
    axios.get(`/jackals/${this.props.routeParams.id}`)
    .then((response) => {
      this.setState({ jackal: response.data.jackal })
    })
    .catch(() => {
      console.log('Error');
    })
  }


  render() {
    const { jackal } = this.state
    return (
      <div className="jackal-container">
        <h1>Damn...remember that scumbag {jackal.name}?</h1>
        <h2 className="jackal-reason">{jackal.reason}</h2>
        <button
        >Forgive Jackal</button>
      </div>
    );
  }
}

export default Jackal;
