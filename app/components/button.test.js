import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from './button';

describe('CustomButton', () => {
  it('renders correctly with given title', () => {
    const { getByText } = render(
      <CustomButton onPress={() => {}} title="Test Button" />
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls the onPress handler when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton onPress={onPressMock} title="Test Button" />
    );
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
