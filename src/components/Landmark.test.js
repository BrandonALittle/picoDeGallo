import React from 'react';
import { shallow } from 'enzyme';

import Landmark from './Landmark';

describe('Landmark', () => {
    it('should render correctly', () => {

        const component = shallow(<Landmark />);

        expect(component).toBeDefined();
    });
});