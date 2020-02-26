import React from "react";
import { shallow } from "enzyme";
import Menu from "../../components/NavBar/Menu";
import { findByTestAttr, checkProps } from "../utils/testUtils";

describe("<Menu/>", () => {
  it("Rendering Menu correctly", () => {
    const wrapper = shallow(<Menu/>);
    const MenuComponent = findByTestAttr(wrapper, "component-menu");
    expect(MenuComponent.length).toBe(1);
  });

  it("Does not throw warning with expected props", () => {
    const expectedProps = {
      onSwitchNavBar: jest.fn(),
      onCloseSubmenu: jest.fn()
    };
    checkProps(Menu, expectedProps);
  });

  describe("<Link/>", () => {
    it("Rendering Link inside Menu and OnClick func", () => {
      const mockFn = jest.fn();
      const wrapper = shallow(
        <Menu
          onCloseSubmenu={() => mockFn()}
          onSwitchNavBar={() => mockFn()}
        />
      );
      wrapper.find("Link").forEach(node => {
        node.simulate("click");
      });

      expect(mockFn).toBeCalledTimes(5);
    });
  });
});

//"component-menu"
//"component-link"
