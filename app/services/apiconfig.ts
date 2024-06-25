import { Alert } from 'react-native';

import axios, { AxiosError, AxiosRequestConfig, } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MyAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean; // Custom property for retry handling
}

const instance = axios.create({
    baseURL: 'https://api-shield.rukkor.dev/api/',
});


instance.interceptors.request.use(
    async (config: any) => {
        const userString = await AsyncStorage.getItem('token');
        if (userString) {
            const { token } = JSON.parse(userString);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use((response: any) => {
    return response;
}, async (error: AxiosError<any>) => {
    const request = error.config as MyAxiosRequestConfig; // Cast to custom config type

    if (!request._retry) {
        request._retry = true;
        return instance(request);
    }

    if (error.response && error.response.status === 400) {
        Alert.alert(error.response.data.message);
    } else {
        Alert.alert('API request failed! An unexpected error occurred.');
    }

    return Promise.reject(error);
});

export default instance;