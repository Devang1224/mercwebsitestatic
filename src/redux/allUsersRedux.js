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
       },
       
       //delete
       deleteUserStart:(state)=>
       {
         state.isFetching = true;
         state.error=false;
       },
       deleteUserSuccess:(state,action)=>
       {
         state.isFetching = false;
         state.users.splice(
            state.users.findIndex((item)=>item._id===action.payload),1
        );
         state.error=false;
       },
       deleteUserFailure:(state)=>
       {
         state.error=true;
       },



    }



})

export const{
    getUserFailure,
    getUserStart,
    getUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess
} = usersSlice.actions;

export default usersSlice.reducer;
