import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../../components/Layout';

describe('<Layout/>', () => {
    it('Render Layout correctly', () => {
        const layout = shallow(<Layout/>);
        expect(layout.length).toEqual(1);
    })
})