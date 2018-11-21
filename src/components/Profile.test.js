import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

describe('Profile', () => {
    it('should render correctly', () => {

        const component = shallow(<Profile />);

        expect(component).toBeDefined();
    });
});