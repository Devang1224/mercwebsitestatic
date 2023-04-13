import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({

    name:"adminUser",
    initialState:{
       currentUser: null,
       isFetching: false,
       error:false
    },
    reducers: {
        adminLoginStart: (state) => {
          state.isFetching = true;
        },
        adminLoginSuccess: (state, action) => {
          state.isFetching = false;
          state.currentUser = action.payload;
          state.error = false;

        },
        adminLoginFailure: (state) => {
          state.isFetching = false;
          state.error = true;
        },
        adminLogout: (state) => {
          state.isFetching = false;
          state.error = false;
          state.currentUser = null;
        },
        adminFetchingStop: (state)=>{
          state.isFetching = false;
        }
      }

    })

  export const {adminLoginStart,adminLoginFailure,adminLoginSuccess,adminLogout,adminFetchingStop} = userSlice.actions  
  export default userSlice.reducer;