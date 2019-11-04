import React, { Component } from 'react';
import Palette from './Palette'
import seedColors from './seedColors'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
