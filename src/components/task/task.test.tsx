import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import task from './task';

describe('<task />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<task />);
    const task = getByTestId('task');

    expect(task).toBeInTheDocument();
  });
});