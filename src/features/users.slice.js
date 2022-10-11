import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
  email: "",
  firstName: "",
  lastName: "",
  auth: {
    isLoggedIn: false,
    accessToken: "",
  },
});

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState(),
  reducers: {
    //users/loginUser
    loginUser: (state, action) => {
      state.auth.isLoggedIn = !state.auth.isLoggedIn;
      state.auth.accessToken = action.payload[0];
      state.email = action.payload[1];
      state.firstName = action.payload[2];
      state.lastName = action.payload[3];
    },
    // users/logoutUser
    logoutUser: (state) => {
      state = initialState();
      return state;
    },

    //users/editUser
    editUser: (state, action) => {
      state.firstName = action.payload[0];
      state.lastName = action.payload[1];
      return state;
    },
  },
});

export const { loginUser, logoutUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
