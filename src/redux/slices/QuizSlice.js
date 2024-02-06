import { Slice, createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizData: [],
    // selectedCourseData: null,
    isTableLoading:false,
  },
  reducers: {
    setQuizData: (state, action) => {
      state.quizData = action.payload;
    },
    // setSelectedCourseData: (state, action) => {
    //   state.selectedCourseData = action.payload;
    // },
    setIsTableLoading:(state, action) => {
      state.isTableLoading = action.payload;
    },
  },
});
export const { setQuizData  ,setIsTableLoading} = quizSlice.actions;

export default quizSlice.reducer;
