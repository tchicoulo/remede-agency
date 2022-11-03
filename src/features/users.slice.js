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
    },
    logoutUser: (state) => {
      state = initialState();
      return state;
    },
    getUser: (state, action) => {
      state.firstName = action.payload[0];
      state.lastName = action.payload[1];
    },

    editUser: (state, action) => {
      state.firstName = action.payload[0];
      state.lastName = action.payload[1];
      return state;
    },
  },
});

export const { loginUser, logoutUser, getUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
