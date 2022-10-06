import { createSlice } from "@reduxjs/toolkit";

const initialState = () => ({
  auth: {
    isLoggedIn: false,
    accessToken: "",
    user: {
      email: "",
      firstName: "",
      lastName: "",
    },
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
      state.auth.user.email = action.payload[1];
      state.auth.user.firstName = action.payload[2];
      state.auth.user.lastName = action.payload[3];
    },
    // users/logoutUser
    logoutUser: (state) => {
      state = initialState();
      return state;
    },

    //users/editUser
    editUser: () => {},
  },
});

export const { loginUser, logoutUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
