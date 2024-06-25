import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './apiconfig';
export interface Countries {
    label: string;
    value: string;
}
export const getCountries = async (): Promise<Countries[]> => {
    try {
        const response = await axios.get('users/get_country');
        const countryArr = response.data.info.map((item: any) => {
            const codes = item.callingCodes.map((code: string) => ({ label: `+${code}`, value: `+${code}` }))
            return codes
        })
        return countryArr.flat();
    } catch (error) {
        throw error;
    }
};

export const register = async (payload: any): Promise<any> => {
    try {
        const {
            data,
            navigation
        } = payload
        const response = await axios.post('users/register', data);
        console.log("successfullreg===>", response.data)
        if (response.status === 200 || response.status === 201) {
            AsyncStorage.setItem('token',JSON.stringify({token:response.data.jwt_token}))
            AsyncStorage.setItem('user',JSON.stringify({info:response.data.info}))
            navigation.navigate('SetupProfile');
        }
        return response.data
    } catch (error) {
        throw error;
    }
};

export const getUserDetails = async (id: any): Promise<any> => {
    try {
        const response = await axios.get(`users/get_user_profile?user_id=${id}`);
        console.log("successfullreg===>", response.data)
        return response.data
    } catch (error) {
        throw error;
    }
};

export const updateProfile = async (payload: any): Promise<any> => {
    try {
        const {
            data,
            navigation
        } = payload
        const response = await axios.post(`users/update_profile`,data);
        console.log("response====>",response)
        if (response.status === 200 || response.status === 201) {
            navigation.navigate('Login');
        }
        console.log("successfullreg===>", response.data)
        return response.data
    } catch (error) {
        throw error;
    }
};

export const login = async (payload: any): Promise<any> => {
    try {
        const {
            data,
            navigation
        } = payload
        const response = await axios.post(`users/login`,data);
        console.log("response====>",response)
        if (response.status === 200 || response.status === 201) {
            navigation.navigate('Logout');
        }
        console.log("successfullreg===>", response.data)
        return response.data
    } catch (error) {
        throw error;
    }
};

export const logout = async (payload: any): Promise<any> => {
    try {
        const {
            data,
            navigation
        } = payload
        const response = await axios.post(`users/log_out`,data);
        console.log("response====>",response)
        if (response.status === 200 || response.status === 201) {
            navigation.navigate('Login');
        }
        console.log("successfullreg===>", response.data)
        return response.data
    } catch (error) {
        throw error;
    }
};