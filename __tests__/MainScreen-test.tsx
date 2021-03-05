/**
 * @format
 */

import 'react-native';
import React from 'react';
import MainScreen from '../src/screens/MainScreen';
import Axios from 'axios';

// Note: test renderer must be required after react-native.
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { getWeatherRequest } from '../src/redux/actions/weatherAction';

// jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
const tree =
  create(
    <Provider store={store}>
      <MainScreen />
    </Provider>,
  )
test('renders main screen correctly', () => {
  act(() => {
    store.dispatch(getWeatherRequest({
      q: 'Pasig',
      units: 'metric'
    }))
  })

  tree.toJSON();
  expect(tree).toMatchSnapshot();
});


//handle state
test('button press', () => {
  const button = tree.root.findByProps({ testID: 'myButton' }).props;
  act(() => button.onPress())
  const text = tree.root.findByProps({ testID: 'myText' }).props;
  expect(text.children).toEqual('press')
})

//async task
test('call timeout', () => {
  act(() => {
    jest.runAllTimers()
  });
  const text = tree.root.findByProps({ testID: 'myText' }).props;
  expect(text.children).toEqual('timeout is called')
})

//redux
test('status stored properly', () => {
  expect(store.getState().weatherReducer.weather).toBeTruthy
})

//axios
test('request', () => {
  Axios.request.mockImplementation(() =>
    Promise.resolve({ data: { status: 'request is called' } }))
  act(() => { jest.runAllTimers() });

  const text = tree.root.findByProps({ testID: 'myText' }).props;
  expect(text.children).toEqual('timeout is called')
})

