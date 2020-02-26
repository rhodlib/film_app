import React from "react";
import { shallow } from "enzyme";
import Categories from "../../components/NavBar/Categories";
import { checkProps } from "../utils/testUtils";
import CategoriesMock from "../../__mocks__/CategoriesMock";

describe("<Categories/>", () => {
  const mockFn = jest.fn();
  it("Rendering Categories correctly", () => {
    const wrapper = shallow(<Categories handleSwitchNavBar={mockFn} />);
    expect(wrapper.length).toEqual(1);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = { categories: [], onSwitchNavBar: mockFn };
    checkProps(Categories, expectedProps);
  });

  describe("<Link/>", () => {
    it("Rendering Link inside Categories and OnClick func", () => {
      const categories = CategoriesMock;
      const wrapper = shallow(
        <Categories categories={categories} onSwitchNavBar={mockFn} />
      );
      wrapper.find("Link").forEach(node => {
        node.simulate("click");
      });
      expect(mockFn).toBeCalledTimes(6);
    });
  });
});
