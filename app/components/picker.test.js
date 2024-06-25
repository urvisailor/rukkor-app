import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CountryPicker from './picker';

describe('CountryPicker', () => {
    beforeEach(() => {
        jest.mock('react-native-picker-select', () => require('../../__mocks__/react-native-picker-select'));
    });
    it('renders correctly with given label and placeholder', () => {
        const { getByText, getByPlaceholderText } = render(
            <CountryPicker
                label="Country"
                value=""
                onValueChange={() => { }}
                items={[
                    { label: 'United States', value: 'US' },
                    { label: 'Canada', value: 'CA' },
                ]}
            />
        );

        expect(getByText('Country')).toBeTruthy();
        expect(getByPlaceholderText('Select a country')).toBeTruthy();
    });

    it('calls the onValueChange handler when a new value is selected', () => {
        const onValueChangeMock = jest.fn();
        const { getByTestId } = render(
            <CountryPicker
                label="Country"
                value=""
                onValueChange={onValueChangeMock}
                items={[
                    { label: 'United States', value: 'US' },
                    { label: 'Canada', value: 'CA' },
                ]}
            />
        );

        const picker = getByTestId('mock-picker');
        fireEvent.changeText(picker, 'US');

        expect(onValueChangeMock).toHaveBeenCalledWith('US');
    });
});
