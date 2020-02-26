import React from 'react';
import {shallow} from 'enzyme';
import RecommendationCard from '../../containers/MoviePage/RecommendationList/RecommendationCard';
import { checkProps } from "../utils/testUtils";


describe("<RecommendationCard/>", () => {
  it("Rendering Recommendation card correctly", () => {
    const wrapper = shallow(<RecommendationCard/>);
    expect(wrapper.length).toBe(1);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = {
      id: 123,
      image: "test",
      title: "test,"
    };
    checkProps(RecommendationCard, expectedProps);
  });
});