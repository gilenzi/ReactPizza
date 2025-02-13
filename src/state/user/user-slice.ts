import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  username: string;
  status: string;
  position: Object;
  address: string;
}

const initialState: UserState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      console.log(action.payload);
      state.username = action.payload;
    },
  },
});

export const {setUsername} = userSlice.actions;

export default userSlice.reducer;
