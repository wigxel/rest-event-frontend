import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import {
  Container,
  TwoColumns,
  Sidebar,
  Tab,
  Stack
} from '../../../components/layouts';
import { FlatList } from '../../../components/lists';
import { ProjectCard } from '../../../components/cards';
import {
  IconButton,
  Input,
  CurrencyInput,
  Button,
  Checkbox
} from '../../../components/forms';
import { H3, H4, H1, P } from '../../../components/typography';
import categories from '../../../libs/mocks/categories';
// import { log } from '../../../libs/helpers';
import { CardStyle } from '../../../styles/helpers';

export default function Projects(props) {
  props.location.hash === '#/' && props.history.replace('#/events');

  return (
    <HashRouter>
      <TwoColumns>
        <Sidebar>
          <FlatList>
            <FlatList.Link to="/events">Events</FlatList.Link>
            <FlatList.Link to="/chatbots">Chatbots</FlatList.Link>
            <FlatList.Link to="/messaging">Messaging</FlatList.Link>
          </FlatList>
        </Sidebar>
        <Container>
          <Route exact path="/events" component={EventsGrid} />
          <Route exact path="/events/create" component={CreateEvent} />
        </Container>
      </TwoColumns>
    </HashRouter>
  );
}

const Heading = props => <H3 className="ml-4 mb-3" {...props} />;
const ShadowCard = CardStyle({ static: true });

const CreateEvent = props => {
  return (
    <Stack className="md:w-2/4" large>
      <hgroup>
        <P>
          <Link to="/events" style={{ color: '#878787' }}>
            <span className="back-arrow" />
            abort
          </Link>
        </P>
        <H1 className="font-light">Let's get you started</H1>
        <H4>We need the following informations</H4>
      </hgroup>

      <section>
        <Input large type="text" placeholder="Title" fullwidth />
        <Input large type="text" placeholder="Date" fullwidth />
        <Input large type="text" placeholder="Category" fullwidth />
      </section>

      <section>
        <Heading>Are you on a budget?</Heading>
        <Tab>
          <Button primary>Yes, i am</Button>
          <Button primary outline>
            No, am not
          </Button>
          <Button primary outline>
            Not really
          </Button>
        </Tab>
      </section>

      <section>
        <Heading>Enter budget</Heading>
        <CurrencyInput large />
      </section>

      <section>
        <Heading>Do you need a planner?</Heading>
        <Tab>
          <Button primary>Yes, please</Button>
          <Button primary outline>
            No, i'll handle it
          </Button>
        </Tab>
      </section>

      <section>
        <Heading>Pick services?</Heading>
        <ShadowCard>
          <Stack>
            <Tab className="flex mb-8" large>
              {categories.map((e, index) => (
                <div key={index}>
                  <Checkbox name={e.name} /> <span>{e.name}</span>
                </div>
              ))}
            </Tab>
            <Button primary outline>
              DONE
            </Button>
          </Stack>
        </ShadowCard>
      </section>

      <IconButton
        icon="add"
        color="#fff"
        primary
        large
        onClick={() => props.history.push('/events')}
      >
        Create Event
      </IconButton>
    </Stack>
  );
};

const EventsGrid = props => {
  return (
    <>
      <Link to="/events/create">
        <IconButton icon="add" color="#fff" primary large>
          New Project
        </IconButton>
      </Link>
      <div className="py-5 flex" style={{ gap: '1rem' }}>
        <ProjectCard title="Micheal's Birthday" category="kids party" />
        <ProjectCard title="Rita's baby shower" category="baby shower" />
      </div>
    </>
  );
};
