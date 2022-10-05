import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    auth: {
      isLoggedIn: false,
      accessToken: "",
      user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      },
    },
  },
  reducers: {
    //users/loginUser
    loginUser: (state, action) => {
      state.auth.user.email = action.payload;
      state.auth.accessToken = action.payload[1];
      state.auth.isLoggedIn = !state.auth.isLoggedIn;
    },
    // users/logoutUser
    logoutUser: (state, action) => {
      state = this.initialState;
    },

    //users/editUser
    editUser: () => {},
  },
});

export const { loginUser, logoutUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
