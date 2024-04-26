import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "counter",
  initialState: {
    users: [],
  },
  reducers: {
    setInitialUser: (state, action) => {
      state.users = action.payload;
    },
    addVoteForUser: (state, action) => {
      const filterUser = state.users.find((user) => user.id === action.payload);
      filterUser.voteCount += 1;

      const filterWithoutUser = state.users.filter(
        (user) => user.id !== filterUser.id
      );

      state.users = [...filterWithoutUser, filterUser];
    },
  },
});

export const { setInitialUser, addVoteForUser } = usersSlice.actions;

export default usersSlice.reducer;
