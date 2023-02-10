import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  movies:''
};

const user = createSlice({
  name: "user",
  initialState,
  reducers:{
    signIn:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
    },

    signOutUser: (state) => {
      state.name = null;
       state.email = null;
        state.photo = null;
    },

}});

export const { signIn, signOutUser } = user.actions;

export const userReducer = user.reducer;
