import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {
      email: "",
    },
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
