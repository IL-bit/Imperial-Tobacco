import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    value: 1,
    pop_up: false,
    formData: null,
    status: 'idle',
    error: null,
    loading: true
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    .addCase('NEXT', (state) => {
        state.value = state.value === 9 ? 1 : state.value + 1;
    })
    .addCase('BACK', (state) => {
        state.value = state.value === 1 ? 9 : state.value - 1;
    })
    .addCase('CHANGE', (state, action) => {
        state.value = action.payload;
    })
    .addCase('TOGGLEPOPUP', (state) => {
        state.pop_up = !state.pop_up;
    })
    .addCase('SENDFORMSTART', (state) => {
        state.status = 'sending';
        state.error = null;
    })
    .addCase('SENDFORMSUCCESS', (state, action) => {
        state.formData = action.payload; 
        state.status = 'submitted';
    })
    .addCase('SENDFORMFAILURE', (state, action) => {
        state.error = action.payload; 
        state.status = 'failed';
    })
    .addCase('CLEARFORM', (state) => {
        state.formData = null; 
        state.status = 'idle';
    })
    .addCase('FETCH_DATA_START', (state) => {
        state.loading = true; 
        state.error = null;
    })
    .addCase('FETCH_DATA_SUCCESS', (state) => {
        state.loading = false; 
    })
    .addCase('FETCH_DATA_FAILURE', (state) => {
        state.loading = false; 
        state.error = 'failed';
    })
});

export default RootReducer;