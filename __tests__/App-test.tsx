/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';


// ui test
// jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
test('renders App Screen', async () => {
  await act(async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

// unit test sample
import { addNumbers } from '../src/utils/mathUtils';
import { track } from '../src/utils/analyticsUtils'

jest.mock('../src/utils/analyticsUtils');
test('something', () => {
  expect('something')
})

test('add numbers', () => {
  expect(addNumbers(1, 2)).toEqual(3);
  expect(track).toBeCalledWith('addNumbers');
})
