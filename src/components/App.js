import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from '../styles/Theme';
import Nav from './Nav';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

function App() {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:authName" component={Auth} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
