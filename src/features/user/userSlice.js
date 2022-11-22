import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    signout: (state) => {
      state.user = null;
    },
  },
});

export const { signup, signout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
