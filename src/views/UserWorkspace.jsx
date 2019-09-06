import React from 'react';
import { Route, Switch, Redirect, NavLink as Link } from 'react-router-dom';
import { DashboardNav as Nav } from '../components/layouts';

import routes from './partials/clients/routes';
import Home from './partials/clients/Home.jsx';
import Planner from './partials/clients/Planner.jsx';
import Projects from './partials/clients/Projects.jsx';
import Settings from './partials/clients/Settings.jsx';

// TODO: remember to remove
import VendorHome from './partials/vendors/Home.jsx'
import VendorServices from './partials/vendors/Services.jsx'

const VENDOR_AUTH = true // for development

const UserWorkspace = () => {
  document.title = 'Dashboard: Rest Events';

  return (
    <>
      <Nav>
          <Link to={routes.overview}>Dashboard</Link>
          <Link to={routes.projects}>Projects</Link>
          <Link to={routes.settings}>Settings</Link>
      </Nav>
      {VENDOR_AUTH ? <Switch>
        <Route exact path={routes.planner()} component={Planner} />
        <Route path={routes.projects} component={VendorServices} />
        <Route path={routes.settings} component={Settings} />
        <Route exact path="/dashboard/overview" component={VendorHome} />
        <Route exact path="/dashboard" component={() => <Redirect to="/dashboard/overview"/>} />
      </Switch> : <Switch>
        <Route exact path={routes.planner()} component={Planner} />
        <Route path={routes.projects} component={Projects} />
        <Route path={routes.settings} component={Settings} />
        <Route exact path="/dashboard/overview" component={Home} />
        <Route exact path="/dashboard" component={() => <Redirect to="/dashboard/overview"/>} />
      </Switch>}
    </>
  );
};

export default UserWorkspace;
