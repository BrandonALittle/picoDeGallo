import React from 'react';
import { shallow } from 'enzyme';

import Way from './Way';

describe('Way', () => {
    it('should render correctly', () => {

        const component = shallow(<Way />);

        expect(component).toBeDefined();
    });
});