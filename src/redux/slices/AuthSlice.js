import { Slice, createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth', 
    initialState: {
      user: null,
      userData:[],
      accessToken: null,
      refreshToken: "",
      loading: false, // Add loading property
      isTableLoading:false,
      singleUserData:null,


    },
    reducers: {
      setUser:(state ,action) =>{
        state.user=action.payload

      },
      setUserData:(state ,action) =>{
        state.userData=action.payload
      },
      setAccessToken:(state ,action) =>{
        state.accessToken=action.payload
      },
      setRefreshToken: (state, action) => {
        state.refreshToken = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsTableLoading:(state, action) => {
      state.isTableLoading = action.payload;
    },
    setSingleUserData:(state ,action)=>{
      state.singleUserData=action.payload
    }
    },
})
export const {setUser ,setUserData ,setAccessToken ,setRefreshToken ,setLoading, setSingleUserData,setIsTableLoading} = authSlice.actions

export default authSlice.reducer