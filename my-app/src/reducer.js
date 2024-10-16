import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    value: 1,
    pop_up: false
};

const RootReducer = createReducer(initialState, builder => {
    builder 
        .addCase('NEXT', (state) => {
            if (state.value === 9) {
                state.value = 1;
            } else {
                state.value = state.value + 1;              
            }            
        })
        .addCase('BACK', (state) => {
            if (state.value === 1) {
                state.value = 9;
            } else {
                state.value = state.value - 1;
            }
        })
        .addCase('CHANGE', (state, action) => {
            state.value = action.payload;
        })
        .addCase('TOGGLEPOPUP', (state) => {
            if (state.pop_up) {
                state.pop_up = false;
            } else {
                state.pop_up = true;
            }
        })
});

export default RootReducer;