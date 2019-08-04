import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './sass/app.scss';
import { Light } from './styles/Theme';
import Nav from './components/Nav';
import Home from './views/Home';
import Auth from './views/Auth';
import Search from './views/Search';
import VendorProfile from './views/VendorProfile';

function App() {
  return (
    <ThemeProvider theme={Light}>
      <BrowserRouter className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/query" component={Search} />
          <Route exact path="/vendor/:slug" component={VendorProfile} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
