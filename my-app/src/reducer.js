import { createReducer } from "@reduxjs/toolkit";

const isMobile = window.innerWidth <= 767;
const buttonCount = isMobile ? 5 : 9;

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
        if (buttonCount) {
            state.value = state.value === 5 ? 1 : state.value + 1;            
        } else {
            state.value = state.value === 9 ? 1 : state.value + 1;  
        }
    })
    .addCase('BACK', (state) => {
        if (buttonCount) {
            state.value = state.value === 1 ? 5 : state.value - 1;          
        } else {
            state.value = state.value === 1 ? 9 : state.value - 1; 
        }
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
    .addCase('FETCH_DATA_SUCCESS', (state, action) => {
        state.loading = false; 
        switch (state.value){
            case 1:
                state.dataList_1 = action.payload;
                break

            case 2:
                state.dataList_2 = action.payload;
                break

            case 3:
                state.dataList_3 = action.payload;
                break

            case 4:
                state.dataList_4 = action.payload;
                break

            case 5:
                state.dataList_5 = action.payload;
                break

            case 6:
                state.dataList_6 = action.payload;
                break

            case 7:
                state.dataList_7 = action.payload;
                break

            case 8:
                state.dataList_8 = action.payload;
                break

            case 9:
                state.dataList_9 = action.payload;
                break

            default:
                break
        }
    })
    .addCase('FETCH_DATA_FAILURE', (state) => {
        state.loading = false; 
        state.error = 'failed';
    })
});

export default RootReducer;