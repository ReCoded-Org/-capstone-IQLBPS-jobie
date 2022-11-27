import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch } from 'react-redux';
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});


const useDispatch = () => useReduxDispatch();

export { useDispatch };