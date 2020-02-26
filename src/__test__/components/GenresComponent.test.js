import React from 'react';
import {shallow} from 'enzyme';
import GenresComponent from '../../containers/MoviePage/GenresComponent';
import { checkProps } from "../utils/testUtils";

describe("<GenresComponent/>", () => {
    it("Rendering GenresComponent correctly", () => {
        const wrapper = shallow(<GenresComponent genres={[{id: 1, name:"test"}, {id: 2, name:"test2"}]}/>);
        expect(wrapper.length).toBe(1);
        const genre = wrapper.find('p');
        expect(genre.length).toBe(2);
    });

    it("Does not throw warning with expected props", () => {
        const expectedProps = {
            genres: [{id: 123, name: "test"}]
        };
        checkProps(GenresComponent, expectedProps);
      });
})