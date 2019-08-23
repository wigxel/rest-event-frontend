import React from 'react';
import { Route } from 'react-router-dom';

import Auth from './Auth';
import Search from './Search';
// import Landing from './Landing';
import ComingSoon from './ComingSoon';
import Nav from '../components/Nav';
import VendorPage from './VendorPage';
import VendorProfile from './VendorProfile';

export default function Home() {
  return (
    <>
      <Nav />
      <Route exact path="/" component={ComingSoon} />
      <Route exact path="/login" component={Auth} />
      <Route exact path="/query" component={Search} />
      <Route exact path="/profile/:slug" component={VendorProfile} />
      <Route exact path="/vendor/:slug" component={VendorPage} />
    </>
  );
}
