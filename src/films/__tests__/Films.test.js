jest.mock('../FilmsRepository');

import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'enzyme';

import Films from '../Films';

const NUMBER_OF_FILMS = 7;

describe('Films', () => {
  it('should be listed', () => {   
    const wrapper = mount(<Films />);

    setImmediate(() => {
      expect(wrapper.find('.film')).toHaveLength(NUMBER_OF_FILMS);   
    });
  });
});
