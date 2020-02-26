import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/NotFound';
import {findByTestAttr, checkProps} from '../utils/testUtils';

describe('<NotFound/>', () => {
    it('Rendering NotFound correctly', () => {
        const string = "test";
        const wrapper = shallow(<NotFound name={string}/>)
        const NotFoundComponent = findByTestAttr(wrapper,'component-not-found');
        expect(NotFoundComponent.length).toBe(1);
    })
    it('Does not throw warning with expected props', () => {
        const expectedProps = {name: "test"};
        checkProps(NotFound, expectedProps);
    })
})