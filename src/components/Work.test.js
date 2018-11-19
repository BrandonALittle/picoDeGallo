import React from 'react';
import { shallow } from 'enzyme';

import Work from './Work';

describe('Work', () => {
    it('should render correctly', () => {

        const component = shallow(<Work />);

        expect(component).toBeDefined();
    });
});