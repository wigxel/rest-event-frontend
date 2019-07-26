import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './sass/app.scss';
import { Light } from './styles/Theme';
import Nav from './components/Nav';
import Home from './views/Home';
import Auth from './views/Auth';

function App() {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Auth} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
