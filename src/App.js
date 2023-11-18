import React from 'react';
import styled from 'styled-components'

import Console from './components/Console'
import Header from './components/Header'
import Profile from './components/Profile'

import 'fomantic-ui-css/semantic.css';

const FlexDiv = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  
  @media only screen and (max-width: 767px) {
    display: block;
    
    > * {
      width: 100%;
    }
  }
  
`

function App() {
    return (
        <FlexDiv className="container">
            <Console/>
            <Profile/>
        </FlexDiv>
    );
}

export default App;
