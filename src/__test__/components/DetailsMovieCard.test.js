import React from 'react';
import {shallow} from 'enzyme';
import DetailsMovieCard from '../../containers/MoviePage/DetailsMovieCard';
import { checkProps } from "../utils/testUtils";

describe("<DetailsMovieCard/>", () => {
    it("Rendering DetailsMovieCard correctly", () => {
        const wrapper = shallow(<DetailsMovieCard/>);
        expect(wrapper.length).toBe(1);
    });

    it("Does not throw warning with expected props", () => {
        const expectedProps = {
            title: "test",
            average: 123,
            release: "test",
            overview: "test",
            image: "test",
            genres: ["test","test2"],
            duration: 123
        };
        checkProps(DetailsMovieCard, expectedProps);
      });
})