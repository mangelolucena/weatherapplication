/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainScreen from '../src/screens/MainScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../src/redux/store';


// it('renders correctly', async () => {
//   await act(async () => {
//     const tree = renderer.create(<MainScreen />).toJSON();
//     expect(tree).toMatchSnapshot();
//   })
// });

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

