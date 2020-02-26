import React from "react";
import { mount } from "enzyme";
import NavBar from "../../components/NavBar";
import { Provider } from "react-redux";
import { storeFactory } from "../utils/testUtils";
import InitialStateMock from "../../__mocks__/InitialStateMock";
import { Router } from "react-router-dom";
import history from "../../history";
import { act } from "react-dom/test-utils";

const store = storeFactory(InitialStateMock);
const dispatch = jest.fn();

describe("<NavBar/>", () => {
  it("Rendering Navbar correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <NavBar />
        </Router>
      </Provider>
    );
    expect(wrapper.length).toEqual(1);

    act(() => {
      dispatch();
    })
  });
});
