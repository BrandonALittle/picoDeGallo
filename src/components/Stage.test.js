import React from 'react';
import { shallow } from 'enzyme';

import Stage from './Stage';

describe('Stage', () => {
    it('should render correctly', () => {

        const component = shallow(<Stage />);

        expect(component).toBeDefined();
    });
});