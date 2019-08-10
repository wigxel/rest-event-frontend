import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/app.scss';
import { Light } from './styles/Theme';

import Home from './views/Home';
import UserWorkspace from './views/UserWorkspace';

function App() {
  return (
    <ThemeProvider theme={Light}>
      <Router className="App">
        <Switch>
          <Route exact path="/dashboard/(.*)?" component={UserWorkspace} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
