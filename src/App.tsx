import React from 'react';
import './App.css';
import './AddTextEditor'
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <h3>Prosemirror and Firebase</h3>
      <div id="editor" style={{marginBottom: "43px", backgroundColor:"lightgrey"}}></div>
    </Container>
  );
}

export default App;
