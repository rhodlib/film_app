import React from 'react';
import {shallow} from 'enzyme';
import Title from '../../components/Title';
import {findByTestAttr, checkProps} from '../utils/testUtils';

describe('<Title/>', () => {
    it('Rendering Title correctly', () => {
        const string = "test";
        const wrapper = shallow(<Title name={string}/>)
        const TitleComponent = findByTestAttr(wrapper,'component-title');
        expect(TitleComponent.length).toBe(1);
    })
    it('Does not throw warning with expected props', () => {
        const expectedProps = {name: "test"};
        checkProps(Title, expectedProps);
    })
})