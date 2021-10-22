import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from '../App';
import store from '../redux/configureStore';

describe('App Component test Snapshot', () => {
  it('App renderes Correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
