import React, { Component } from 'react';
import styled from 'styled-components';
import NowPlaying from '../components/NowPlaying';
import Popular from '../components/Popular';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  margin-top: 100px;
  padding: 10px;
  padding-bottom: 100px;
  color: ${props => props.theme.mainColor};
  .popular{
    margin-top: 140px;
  }
  h3 {
    margin-bottom: 15px;
  }
  .popular h3 {
    margin-bottom: 15px;
    padding: 0;
  }
`;

const About = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  color: ${props => props.theme.offWhite};
  background-color: ${props => props.theme.mainColor};
  text-align: center;
  h5 {
    font-size: 1.9rem;
  }
`;

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <h3>Top Movies In Theaters</h3>
            <NowPlaying />
          </div>
          <div className="popular">
            <h3>Popular Titles</h3>
            <Popular />
          </div>
        </Container>
        <About>
          <h5>Join Today!</h5>
          <p>Create your Let's Watch account today. You will be able to keep track of all of your favorite movies in one place!</p>
        </About>
      </div>
    )
  }
}

export default HomeContainer;