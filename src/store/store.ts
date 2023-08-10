import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../context/auth.context";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
