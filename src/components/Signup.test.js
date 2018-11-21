import React from 'react';
import { shallow } from 'enzyme';

import Signup from './Signup';

describe('Signup', () => {
    it('should render correctly', () => {

        const component = shallow(<Signup />);

        expect(component).toBeDefined();
    });
});