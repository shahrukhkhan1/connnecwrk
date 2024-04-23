// const { createSlice,nanoid } = require("@reduxjs/toolkit");

// const initialState={
//   loginData:[
//     {id:1,userName:'hello'}
//   ]
// }

// export const loginSlice = createSlice({
// name:'user deytails',
// initialState,
// reducers:{
//   addUser:(state, action)=>{
//     const newUser={
//       id:nanoid(),
//       userName:action.payload
//     }
//     state.loginData.push(newUser)
//   },
//   removeUser:()=>{}
// }
// })