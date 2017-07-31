import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import { mount } from 'enzyme';

import Films from './Films';

const NUMBER_OF_FILMS = 7;

describe('Films', () => {
    it('should be listed', () => {
        const wrapper = mount(<Films />);
        expect(wrapper.find('.film')).to.have.length(NUMBER_OF_FILMS);
    });
});
