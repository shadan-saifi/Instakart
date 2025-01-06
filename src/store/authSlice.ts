import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthSlice {
    status: boolean;
    userData: any | null;
  }

const initialState:AuthSlice = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.status = true;
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer