import React from 'react';
import {shallow} from 'enzyme';
import RecommendationList from '../../containers/MoviePage/RecommendationList';
import { checkProps } from "../utils/testUtils";

const recommendations = [
    {
        id: 123,
        title: "test1",
        poster_path: "test1"
    },
    {
        id: 123,
        title: "test2",
        poster_path: "test2"
    }
]

describe("<RecommendationList/>", () => {
  it("Rendering Recommendation List correctly", () => {
    const wrapper = shallow(<RecommendationList recommendations={recommendations}/>);
    expect(wrapper.length).toBe(1);
    const recommendation = wrapper.find('RecommendationCard');
    expect(recommendation.length).toBe(2);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = {
        recommendations: [{}]
    };
    checkProps(RecommendationList, expectedProps);
  });
});
