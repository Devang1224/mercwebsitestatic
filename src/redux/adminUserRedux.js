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
          state.currentUser = null;
        },
      }

    })

  export const {adminLoginStart,adminLoginFailure,adminLoginSuccess,adminLogout} = userSlice.actions  
  export default userSlice.reducer;