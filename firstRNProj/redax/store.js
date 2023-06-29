import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const incrementLvl = createAction('myUnlockdLvl/increment')

//JSON.parse(localStorage.getItem('myUnlockdLvl')) ?? 
const initialLvl = 10;
const lvlReducer = createReducer(initialLvl, (builder) => {
  builder.addCase(incrementLvl, (state, action) => state + action.payload)
})
//////////// стор
export const store = configureStore({
    reducer: {
        myUnlockdLvl: lvlReducer
    },
});
/////////////////
