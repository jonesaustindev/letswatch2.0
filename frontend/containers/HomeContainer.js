import React, { Component } from 'react';
import NowPlaying from '../components/NowPlaying';
import Popular from '../components/Popular';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h2>hey</h2>
        <NowPlaying />
        <Popular />
      </div>
    )
  }
}

export default HomeContainer;