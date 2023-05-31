import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({

    name:"user",
    initialState:{
       currentUser: null,
       isFetching: false,
       error:false,
       isLogin:false
    },
    reducers:{

        loginStart:(state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.isLogin=true;
            state.error = false;
 
        },
        loginFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        logOut:(state)=>{
            state.currentUser=null;
            state.isLogin = false
        },
        loginAsGuest:(state)=>{
            state.isLogin=true;
        }

    }

    })

  export const {loginStart,loginFailure,loginSuccess,logOut,loginAsGuest} = userSlice.actions  
  export default userSlice.reducer;