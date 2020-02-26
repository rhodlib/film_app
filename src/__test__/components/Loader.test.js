import React from 'react';
import {shallow} from 'enzyme';
import Loader from '../../components/Loader';
import {findByTestAttr} from '../utils/testUtils';

describe('<Loader/>', () => {
    it('Rendering Loader correctly', () => {
        const wrapper = shallow(<Loader/>)
        const loaderComponent = findByTestAttr(wrapper, 'component-loader');
        expect(loaderComponent.length).toBe(1);
    })
})