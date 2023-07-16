import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

test('should increment counter', async () => {
    const user = userEvent.setup();

    // Arrange
    render(<Counter />);

    const counter = screen.getByText('0');
    const incrementButton = screen.getByText('one up');

    // /* debug to console */
    // screen.debug(incrementButton);
    // /* debug to online playground */
    // screen.logTestingPlaygroundURL();

    // Act
    await user.click(incrementButton);
    // Assert
    expect(counter.textContent).toEqual('1');
});