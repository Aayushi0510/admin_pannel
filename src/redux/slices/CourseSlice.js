import { Slice, createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseData: [],
    selectedCourseData: null,
    isTableLoading:false,
  },
  reducers: {
    setCourseData: (state, action) => {
      state.courseData = action.payload;
    },
    setSelectedCourseData: (state, action) => {
      state.selectedCourseData = action.payload;
    },
    setIsTableLoading:(state, action) => {
      state.isTableLoading = action.payload;
    },
  },
});
export const { setCourseData ,setSelectedCourseData ,setIsTableLoading} = courseSlice.actions;

export default courseSlice.reducer;
