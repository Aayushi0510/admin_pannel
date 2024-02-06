import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import apiSlice from "./services/apiSlice";
import { authMiddleware } from "../../utils";
import AuthSlice from "./AuthSlice";
import Sidenavlayoutslice from "./Sidenavlayoutslice";
import courseSlice from "./CourseSlice";
import categorySlice from "./CategorySlice";
import quizSlice from "./QuizSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    sideNavLayout: Sidenavlayoutslice,
    course: courseSlice,
    order: orderSlice,
    category: categorySlice,
    quiz: quizSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authMiddleware, apiSlice.middleware]),
});
setupListeners(store.dispatch);
export default store;
