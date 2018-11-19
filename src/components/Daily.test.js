import React from 'react';
import { shallow } from 'enzyme';

import Daily from './Daily';

describe('Daily', () => {
    it('should render correctly', () => {

        const component = shallow(<Daily />);

        expect(component).toBeDefined();
    });
});