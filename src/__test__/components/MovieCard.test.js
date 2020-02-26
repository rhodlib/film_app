import React from "react";
import { shallow } from "enzyme";
import MovieCard from "../../containers/HomePage/MovieList/MovieCard";
import { checkProps } from "../utils/testUtils";

describe("<MovieCard/>", () => {
  it("Rendering MovieCard correctly", () => {
    const wrapper = shallow(<MovieCard />);
    expect(wrapper.length).toBe(1);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = {
      image: "test",
      title: "test2",
      id: 123
    };
    checkProps(MovieCard, expectedProps);
  });

  
});
