import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { DashboardNav as Nav } from '../components/layouts';

import routes from './partials/clients/routes';
import Home from './partials/clients/Home.jsx';
import Planner from './partials/clients/Planner.jsx';
import Projects from './partials/clients/Projects.jsx';

const UserWorkspace = () => {
  document.title = 'Dashboard: Rest Events';

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path={routes.planner()} component={Planner} />
        <Route path="/dashboard/projects" component={Projects} />
        <Route exact path="/dashboard/overview" component={Home} />
        <Route exact path="/dashboard" component={() => <Redirect to="/dashboard/overview"/>} />
      </Switch>
    </>
  );
};

export default UserWorkspace;
