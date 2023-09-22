import { createSlice } from '@reduxjs/toolkit';

interface Ilogin {
  userinfo: any;
}
const initialState: Ilogin = {
  userinfo: {}
};
const Login = createSlice({
  name: 'login',
  initialState,
  reducers: {}
});
export default Login.reducer;
