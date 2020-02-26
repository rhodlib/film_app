import checkPropTypes from "check-prop-types";
import {createStore, applyMiddleware} from 'redux';
import reducers from '../../core/reducers';
import {middlewares} from '../../core';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: reducers, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function - storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(reducers, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @param {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};


export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "props",
    component.name
  );
  expect(propError).toBeUndefined();
};
