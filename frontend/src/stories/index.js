import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import About from '../About';
import Films from '../Films';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

storiesOf('ReactWars', module)
  .add('About', () => <About />)
  .add('Films', () => <Films />);
