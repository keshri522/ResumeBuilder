import React from 'react';
import { createSlice } from '@reduxjs/toolkit'
// here first it will check if any dat is available  then show the card otherwise it simply return a empty string..
const getDataFromLocalStroage = () => {
    let localData = localStorage.getItem("FormData");
    if (localData) {
        return JSON.parse(localData)
    }
    else {
        return []
    }
}
const MySlice1 = createSlice({
    initialState: {
        data: getDataFromLocalStroage()
    },
    name: "FormData",
    reducers: ({
        SendFormdataToStore: (state, action) => {
            // here we perfome some operations and define the actions..
            
            if (state.data !== null) {
                state.data.push(action.payload)
            }
            else {
                state.data = [action.payload]
            }
    //    here we send all the data to local Storage
            localStorage.setItem("FormData", JSON.stringify(state.data));
        }
    })
})
// here we export actions and reducers.
export const { SendFormdataToStore } = MySlice1.actions;
export default MySlice1.reducer;










