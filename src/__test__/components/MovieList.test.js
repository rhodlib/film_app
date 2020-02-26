import React from "react";
import { shallow } from "enzyme";
import MovieMock from '../../__mocks__/MovieMock';
import MovieList from "../../containers/HomePage/MovieList";
import { checkProps } from "../utils/testUtils";

describe("<MovieList/>", () => {
  it("Rendering MovieCard correctly", () => {
    const wrapper = shallow(<MovieList movieArray={MovieMock} />);
    expect(wrapper.length).toBe(1);
    const movieCard = wrapper.find('MovieCard');
    expect(movieCard.length).toBe(2);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = {
      movieArray: []
    };
    checkProps(MovieList, expectedProps);
  });
});
