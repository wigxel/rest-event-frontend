import React from 'react';
import { HashRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Theme } from './styles/StyleComponents';
import {
  VendorAccord,
  Collapsible
} from '../src/components/layouts/Accordions';
import { FlatList } from '../src/components/layouts';
import { H4, P } from '../src/components/typography';
import Stack from '../src/components/layouts/Stack';

const stories = storiesOf('List', module).addDecorator(withKnobs);

stories
  .add('Collapsible', () => {
    return (
      <Theme>
        <Stack>
          <H4>Collapsible</H4>
          <Collapsible open={boolean('Toggle One', false)}>
            <P>Lorem Morgan</P>
            <P>Lorem Morgan</P>
            <P>John Carter</P>
            <P>Emily Richards</P>
          </Collapsible>

          <Collapsible open={boolean('Toggle Two', true)}>
            <FlatList>
              <FlatList.Item>Lorem Morgan</FlatList.Item>
              <FlatList.Item>Lorem Morgan</FlatList.Item>
              <FlatList.Item>John Carter</FlatList.Item>
              <FlatList.Item>Emily Richards</FlatList.Item>
            </FlatList>
          </Collapsible>
        </Stack>
      </Theme>
    );
  })
  .add('FlatList', () => {
    return (
      <Theme>
        <div>
          <H4>Flat List</H4>
          <FlatList>
            <FlatList.Item>Lorem Morgan</FlatList.Item>
            <FlatList.Item>Lorem Morgan</FlatList.Item>
            <FlatList.Item>John Carter</FlatList.Item>
            <FlatList.Item>Emily Richards</FlatList.Item>
          </FlatList>

          <H4>Flat Links (NavLinks)</H4>
          <HashRouter>
            <FlatList>
              <FlatList.Link to={'/dashboard'}>Dashboard</FlatList.Link>
              <FlatList.Link to={'/home'}>Home</FlatList.Link>
              <FlatList.Link to={'/settings'}>Settings </FlatList.Link>
              <FlatList.Link to={'/logout'}>Logout</FlatList.Link>
            </FlatList>
          </HashRouter>
        </div>
      </Theme>
    );
  });

storiesOf('List.Accordions', module).add('Accordion', () => (
  <Theme>
    <div style={{ width: '50%' }}>
      <H4>Vendor Accordion</H4>
      <FlatList>
        <VendorAccord />
        <VendorAccord />
        <VendorAccord />
      </FlatList>
    </div>
  </Theme>
));
