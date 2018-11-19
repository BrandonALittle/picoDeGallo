import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

describe('Menu', () => {
    it('should render correctly', () => {

        const component = shallow(<Menu />);

        expect(component).toBeDefined();
    });
});