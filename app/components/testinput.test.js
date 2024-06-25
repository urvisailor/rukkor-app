import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomTextInput from './textinput';

describe('CustomTextInput', () => {
  it('renders correctly with given label and placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <CustomTextInput
        label="Test Label"
        placeholder="Test Placeholder"
        value=""
        onChangeText={() => {}}
      />
    );

    expect(getByText('Test Label')).toBeTruthy();
    expect(getByPlaceholderText('Test Placeholder')).toBeTruthy();
  });

  it('calls the onChangeText handler when text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomTextInput
        label="Test Label"
        placeholder="Test Placeholder"
        value=""
        onChangeText={onChangeTextMock}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Test Placeholder'), 'New Text');
    expect(onChangeTextMock).toHaveBeenCalledWith('New Text');
  });

  it('displays the value correctly', () => {
    const { getByDisplayValue } = render(
      <CustomTextInput
        label="Test Label"
        placeholder="Test Placeholder"
        value="Test Value"
        onChangeText={() => {}}
      />
    );

    expect(getByDisplayValue('Test Value')).toBeTruthy();
  });
});
