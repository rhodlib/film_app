import React from 'react';
import {shallow} from 'enzyme';
import MovieTrailer from '../../containers/MoviePage/MovieTrailer';
import { checkProps } from "../utils/testUtils";

describe("<MovieTrailer/>", () => {
  it("Rendering MovieTrailer correctly", () => {
    const wrapper = shallow(<MovieTrailer/>);
    expect(wrapper.length).toBe(1);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = {
      movieVideo: [{key: "test"}]
    };
    checkProps(MovieTrailer, expectedProps);
  });
});
