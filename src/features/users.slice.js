import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      user: {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
      },
    },
  },
  reducers: {
    //users/loginUser
    loginUser: (state, action) => {
      state.auth.user.email = action.payload;
      state.auth.user.password = action.payload;
      state.auth.isLoggedIn = true;
    },
    // users/logoutUser
    logoutUser: (state, action) => {
      state = this.initialState;
      return state;
    },

    //users/editUser
    editUser: () => {},
  },
});

export const { loginUser, logoutUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
