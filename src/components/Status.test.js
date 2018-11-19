import React from 'react';
import { shallow } from 'enzyme';

import Status from './Status';

describe('Status', () => {
    it('should render correctly', () => {

        const component = shallow(<Status />);

        expect(component).toBeDefined();
    });
});