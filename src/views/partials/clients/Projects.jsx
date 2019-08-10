import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { FlatList, Container, TwoColumns } from '../../../components/layouts';

import { ProjectCard } from '../../../components/cards';
import { IconButton } from '../../../components/forms';
// import { log } from '../../../libs/helpers';

export default function Projects(props) {
  props.location.hash === '#/' && props.history.replace('#/events');

  return (
    <HashRouter>
      <TwoColumns>
        <FlatList>
          <FlatList.Link to="/events">Events</FlatList.Link>
          <FlatList.Link to="/chatbots">Chatbots</FlatList.Link>
          <FlatList.Link to="/messaging">Messaging</FlatList.Link>
        </FlatList>
        <Container>
          <Route path="/events" component={EventsGrid} />
        </Container>
      </TwoColumns>
    </HashRouter>
  );
}

const EventsGrid = props => {
  return (
    <>
      <IconButton icon="add" color="#fff" primary>
        New Project
      </IconButton>
      <div className="py-5 flex" style={{ gap: '1rem' }}>
        <ProjectCard title="Micheal's Birthday" category="kids party" />
        <ProjectCard title="Rita's baby shower" category="baby shower" />
      </div>
    </>
  );
};
