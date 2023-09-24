import { createSlice } from '@reduxjs/toolkit';

import { MainSliceState } from './types';

const initialState: MainSliceState = {
    theme: 'light',
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeTheme(state) {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    },

});

export const { changeTheme } = mainSlice.actions;

export default mainSlice.reducer;
