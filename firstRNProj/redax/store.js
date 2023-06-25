import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
/////застарілий варіант
//const incrementLvl = createAction('myUnlockdLvl/increment')

//const lvlReducer = createReducer(1, {
//    [incrementLvl]: (state, action) => state + action.payload
//});
////////варіант новий
export const incrementLvl = createAction('myUnlockdLvl/increment')
//const decrement = createAction('counter/decrement')
//
const lvlReducer = createReducer(1, (builder) => {
  builder.addCase(incrementLvl, (state, action) => state + action.payload)
//  builder.addCase(decrement, (state, action) => state - action.payload)
})
////////////наш стор
export const store = configureStore({
    reducer: {
        myUnlockdLvl: lvlReducer
    },
});
/////////////////
