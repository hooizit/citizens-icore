import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react'

import LiveSearch from './components/live-search';
import './index.css';
import data from './data.json';

ReactDOM.render(
  <Container>
    <LiveSearch persons={data} />
  </Container>,
  document.getElementById('root')
);
