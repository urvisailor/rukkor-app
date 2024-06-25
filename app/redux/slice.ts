import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Countries, getCountries, getUserDetails, login, logout, register, updateProfile } from "../services/apiservice";
export interface State {
    countries: Countries[],
    registerDetail: any,
    user: any,
    isloading:boolean
}

const initialState: State = {
    countries: [],
    registerDetail: {},
    user: {},
    isloading:false
};

export const fetchCountries = createAsyncThunk<Countries[]>(
    "profile/fetchCountries",
    async () => {
        const response = await getCountries();
        return response;
    }
);

export const registerApp = createAsyncThunk(
    "profile/registerApp",
    async (data: any) => {
        const response = await register(data);
        return response;
    }
);

export const getUserData = createAsyncThunk(
    "profile/getUserData",
    async (id: any) => {
        const response = await getUserDetails(id);
        return response;
    }
);

export const clearUserData = createAsyncThunk(
    "profile/clearUserData",
    async (data: any) => {
        const response = await logout(data);
        return response;
    }
);

export const updateUser = createAsyncThunk(
    "profile/updateUser",
    async (data: any) => {
        const response = await updateProfile(data);
        return response;
    }
);

export const auth = createAsyncThunk(
    "profile/auth",
    async (data: any) => {
        const response = await login(data);
        return response;
    }
);

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries = action.payload;
        });
        builder.addCase(registerApp.fulfilled, (state, action) => {
            state.registerDetail = action.payload;
        });
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isloading = false;
            state.user = action.payload;
        });
        builder.addCase(updateUser.pending, (state, action) => {
            state.isloading = true;
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isloading = false;
        });
        builder.addCase(auth.fulfilled, (state, action) => {
            state.isloading = false;
        });
        builder.addCase(auth.pending, (state, action) => {
            state.isloading = true;
        });
        builder.addCase(auth.rejected, (state, action) => {
            state.isloading = false;
        });
        builder.addCase(clearUserData.fulfilled, (state, action) => {
            state.isloading = false;
        });
        builder.addCase(clearUserData.pending, (state, action) => {
            state.isloading = true;
        });
        builder.addCase(clearUserData.rejected, (state, action) => {
            state.isloading = false;
        });
    }
})
export default profileSlice.reducer;