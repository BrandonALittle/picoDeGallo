import React from 'react';
import { shallow } from 'enzyme';

import Activity from './Activity';

describe('Activity', () => {
    it('should render correctly', () => {

        const component = shallow(<Activity />);

        expect(component).toBeDefined();
    });
});