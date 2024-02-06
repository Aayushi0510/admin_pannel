import { Slice, createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderData: [],
    selectedCourseData: null,
    isTableLoading:false,
  },
  reducers: {
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    setSelectedCourseData: (state, action) => {
      state.selectedCourseData = action.payload;
    },
    setIsTableLoading:(state, action) => {
      state.isTableLoading = action.payload;
    },
  },
});
export const { setOrderData ,setSelectedCourseData ,setIsTableLoading} = orderSlice.actions;

export default orderSlice.reducer;
