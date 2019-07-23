import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ThemeProvider } from 'styled-components';
import { Light } from '../src/styles/Theme';

import {
  Button,
  IconButton,
  CircleButton
} from '../src/components/forms/buttons';
import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

const Theme = props => (
  <ThemeProvider theme={Light}>
    <>{props.children}</>
  </ThemeProvider>
);

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
