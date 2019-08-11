import React from 'react';
import { storiesOf } from '@storybook/react';
import { H3, H4 } from '../src/components/typography/heading';
import { Theme } from './styles/StyleComponents';
import {
  SearchComponent,
  IconInput,
  RadioInput,
  RadioLabel,
  CurrencyInput,
  Checkbox,
  Input
} from '../src/components/forms';
import { log, trace } from '../src/libs/helpers';

storiesOf('Form Elements', module)
  .add('Inputs Fields', () => (
    <Theme>
      <section>
        <H3>Input with Icons</H3>
        <IconInput icon="home" fullwidth>
          <Input placeholder="Cup of Coffee" />
        </IconInput>
        <IconInput icon="search" placeholder="Enter the world" fullwidth />

        <H3>Flat Inputs</H3>
        <Input placeholder="E-mail Address: John Doe" />
        <Input placeholder="First Name" />
        <Input placeholder="Cup of Coffee" />

        <H3>Full Width Input</H3>
        <Input placeholder="Cup of Coffee" fullwidth />
        <Input placeholder="Enter the world" fullwidth />

        {/*
        <H4>Main Search Input</H4>
       <div style={{ backgroundColor: 'blue', padding: 15 }}>
        <SearchComponent />
      </div> */}
      </section>
    </Theme>
  ))
  .add('Radio', () => (
    <Theme>
      <H3>Radio</H3>
      <RadioInput name="poor" value="Mobbi" /> Male
      <RadioLabel name="poor" value="Antelope" fullwidth />
      <H3>Checkbox</H3>
      <div>
        <Checkbox fullwidth name="rich" value="Antelope" /> Designer
      </div>
      <div>
        <Checkbox fullwidth name="rich" value="Antelope" /> Morpheus
      </div>
    </Theme>
  ))
  .add('Number Input', () => (
    <Theme>
      <h1>Currency Input</h1>
      <p>Enter a number</p>
      <CurrencyInput onChange={e => log(e.target.value)} /> <br />
      <br />
      <p>Large</p>
      <CurrencyInput large />
      <p>Large & Fullwidth</p>
      <CurrencyInput fullwidth large isInvalid={trace('Message')} />
    </Theme>
  ));
