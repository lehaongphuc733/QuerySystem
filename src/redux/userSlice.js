import { createSlice } from "@reduxjs/toolkit";

// Cart Number
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.quantity += 1;
//       state.products.push(action.payload.products);
//       state.total += action.payload.price;
//     },
//   },
// });

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: [
      {
        userName: "lequynhaivan01",
        fullName: "Lê Quỳnh Ái Vân",
        phoneNumber: "0123456789",
        email: "admin@abc.com",
        password: "123456",
        role: 0,
        // avatar: "https://data.whicdn.com/images/228714327/original.jpg",
      },
    ],
  },
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
