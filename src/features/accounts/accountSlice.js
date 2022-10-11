import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import API from '../../api'
const accountSlice = createSlice({
    name: "accounts",
    initialState: {
        userData: {},
        status: null,
        error: null
    },
    reducers: {
        logoutUser: (state) => {
            state.userData = {}
            localStorage.removeItem(process.env.REACT_APP_USER_PROFILE)
        }
    },
    extraReducers(builder){
         builder
           // sign user in reducer functions
            .addCase(signUser.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.userData = action.payload 
                localStorage.setItem(process.env.REACT_APP_USER_PROFILE, JSON.stringify(action.payload))
            })
            .addCase(signUser.pending, (state) => { state.status = 'pending'})
            .addCase(signUser.rejected, (state) => { state.status = 'failed'})

            // login user reducer functions
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.userData = action.payload
                localStorage.setItem(process.env.REACT_APP_USER_PROFILE, JSON.stringify(action.payload))
            })
            .addCase(loginUser.pending, (state) => { state.status = 'pending'})
            .addCase(loginUser.rejected, (state) => { state.status = 'failed'})

            // edit user reducer functions
            .addCase(editUserAction.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.userData = action.payload
                localStorage.setItem(process.env.REACT_APP_USER_PROFILE, JSON.stringify(action.payload))
            })
            .addCase(editUserAction.pending, (state) => { state.status = 'pending'})
            .addCase(editUserAction.rejected, (state) => { state.status = 'failed'})

            // reset password reducer functions
            .addCase(resetUserPassword.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.userData = action.payload
            })
            .addCase(resetUserPassword.pending, (state) => { state.status = 'pending'})
            .addCase(resetUserPassword.rejected, (state) => { state.status = 'failed'})
    }
})

export const accountReducer = accountSlice.reducer
export const { logoutUser } = accountSlice.actions
export const signUser = createAsyncThunk('accounts/signin', async(data) => {
    const response = await API.post('/accounts/signin', data)
    return response.data
})
export const loginUser = createAsyncThunk('accounts/login', async (data) => {
    const response = await API.post('/accounts/login', data)
    return response.data
})
export const editUserAction = createAsyncThunk('accounts/edit', async(data) => {
    const response = await API.patch('/accounts/edit', data)
    return response.data
}) 
export const resetUserPassword = createAsyncThunk('accounts/resetPassword', async(data) => {
    const response = await API.patch('/accounts/password/reset', data)
    return response.data
})