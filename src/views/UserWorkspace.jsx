import React from 'react';
import { DashboardNav as Nav } from '../components/layouts';
import { Route } from 'react-router-dom';

import Home from './partials/clients/Home.jsx';
import Projects from './partials/clients/Projects.jsx';

const UserWorkspace = () => {
  document.title = 'Dashboard: Rest Events';

  return (
    <>
      <Nav />
      <Route exact path="/dashboard/projects" component={Projects} />
      <Route exact path="/dashboard" component={Home} />
    </>
  );
};

export default UserWorkspace;
