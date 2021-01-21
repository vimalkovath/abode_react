import React from 'react';
import { Router } from '@reach/router';

import { Container } from './screens/styled';
import { Home } from './screens/Home/Home';
import { FAQ } from './screens/FAQ';
import { ProtectedRoute } from './util/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Container>
      <Router basepath={'/'} primary={false}>
        <ProtectedRoute as={Home} role={1} path={'/home'} />
        <ProtectedRoute as={Home} role={1} path={'/'} />
            </Router>
    </Container>
  );
}

export default App;
