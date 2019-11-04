import React, { Component } from 'react';
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
