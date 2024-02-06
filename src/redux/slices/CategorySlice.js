import { Slice, createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
    name: 'category',   
    initialState: {
      categoryData: [],
      isTableLoading:false,
      selectedCategory: null,


    },
    reducers: {
      setCategoryData:(state ,action) =>{
        state.categoryData=action.payload
      },
      setIsTableLoading:(state, action) => {
        state.isTableLoading = action.payload;
      },
      setSelectedCategory: (state, action) => {
        state.selectedCategory = action.payload;
      },
   
    },
})
export const {setCategoryData , setIsTableLoading  ,setSelectedCategory} = categorySlice.actions

export default categorySlice.reducer