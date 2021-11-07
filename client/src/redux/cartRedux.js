import {createSlice} from '@reduxjs/toolkit'

const cartSclice = createSlice({
    name:"cart",
    initialState:{
        products:[],

    },

    reducers:{
        addProducts: (state, action) =>{
            state.products.push(action.payload);
        },
    }
})

export const {addProducts} = cartSclice.actions;
export default cartSclice.reducer;