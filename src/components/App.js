import React, { Component } from 'react';
import '../App.css'

class App extends Component {
  render() {
    return (
      <section className="App">
        <div>{this.props.children}</div>
      </section>
    );
  }
}

export default App;
