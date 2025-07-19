import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  
  reducers: {
    addUser: (state, action) => {
      return action.payload
    },
    removeUser: (state, action) => {
      return null
    },

    signIn:(state)=>{
      state.isAuthenticated=true
    },
    signOut:(state)=>{
      state.isAuthenticated=false
    }
  },
});

export const {addUser, removeUser,signIn,signOut} = userSlice.actions;
export default userSlice.reducer