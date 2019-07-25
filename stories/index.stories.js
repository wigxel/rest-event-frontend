import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Button,
  IconButton,
  CircleButton
} from '../src/components/forms/buttons';
import { H1, H2 } from '../src/components/typography/heading';
import { P } from '../src/components/typography/text';
import { Welcome } from '@storybook/react/demo';
import { Theme } from './styles/StyleComponents';

storiesOf('Welcome', module).add('to Storybook', () => (
  <div>
    <H2>The Design Lab for Project UI components</H2>
    <P>It all begins from the first component.</P>
  </div>
));

storiesOf('Button', module)
  .add('with text', () => (
    <Theme>
      <Button>Hello Button</Button>
      <Button primary>Do Something</Button>
      <Button danger>Stop Now</Button>
    </Theme>
  ))
  .add('with icons', () => (
    <Theme>
      <IconButton name="dashboard" invert>
        Add Vendor
      </IconButton>
      <IconButton name="home">Add Profile Info</IconButton>
    </Theme>
  ))
  .add('Button Circle', () => (
    <Theme>
      <CircleButton icon="home" onClick={() => alert('clicking button')} />
    </Theme>
  ));

import './Forms';
