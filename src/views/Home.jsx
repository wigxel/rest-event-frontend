import React from 'react';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';
import Landing from './Landing';
import Auth from './Auth';
import Search from './Search';
import VendorProfile from './VendorProfile';
import VendorPage from './VendorPage';

export default function Home() {
  return (
    <>
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Auth} />
      <Route exact path="/query" component={Search} />
      <Route exact path="/profile/:slug" component={VendorProfile} />
      <Route exact path="/vendor/:slug" component={VendorPage} />
    </>
  );
}
