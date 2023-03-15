import {createSlice} from "@reduxjs/toolkit"

export const usersSlice = createSlice({

    name: "getUser",
    initialState:{
        users: [],
        isFetching: false,
        error:false
    },
    reducers:{

       getUserStart : (state)=>{
        state.isFetching=true
        state.error=false
       },
       getUserSuccess : (state,action)=>{
        state.isFetching=false
        state.users=action.payload
        state.error=false
      
       },
       getUserFailure:(state)=>{
        state.isFetching= false
        state.error=true
       }


    }



})

export const{
    getUserFailure,
    getUserStart,
    getUserSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
