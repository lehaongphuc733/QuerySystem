import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: boolean;
}

const initialState: UserState = {
  userName: "lequynhaivan01",
  fullName: "Lê Quỳnh Ái Vân",
  phoneNumber: "0123456789",
  email: "admin@abc.com",
  password: "123456",
  role: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.email = "";
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
