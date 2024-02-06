import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardWrappper from "./pages/Dashboard/DashboardWrapper";
import CourseListWrapper from "./pages/Course/list/CourseListWrapper";
import AddCourse from "./pages/Course/add/Addcourse";
import UserListingWrapper from "./pages/users/list/UserListingWrapper";
import AddCouseWrapper from "./pages/users/add/AddCouseWrapper";
import Categorylistwrapper from "./pages/category/list/Categorylistwrapper";
import AddCategoryWrapper from "./pages/category/add/AddCategoryWrapper";
import EditUserWrapper from "./pages/users/edit/EditUserListingWrapper";
import EditCourseListingWrapper from "./pages/Course/edit/EditCourseListingWrapper";
import OrderListWrapper from "./pages/Order/list/OrderListWrapper";
import AddQuizWrapper from "./pages/quiz/add/AddQuizWrapper";
import EditCategoryWrapper from "./pages/category/edit/EditCategoryListinWrapper";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardWrappper/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/dashboard" element={<DashboardWrappper/>}/> */}
        <Route path="/course" element={<CourseListWrapper/>}/>
        <Route path="/course/add" element={<AddCourse/>}/>

        <Route path="/users" element={<UserListingWrapper/>}/>
        <Route path="/users/edit/:id" element={<EditUserWrapper/>}/>
        <Route path="/course/edit/:id" element={<EditCourseListingWrapper/>}/>
        <Route path="/category/edit/:id" element={<EditCategoryWrapper/>}/>

        <Route path="/users/add" element={<AddCouseWrapper/>}/>
        <Route path="/category" element={<Categorylistwrapper/>}/>
        <Route path="/category/add" element={<AddCategoryWrapper/>}/>
        <Route path="/order" element={<OrderListWrapper/>}/>
        <Route path="/quiz/:id" element={<AddQuizWrapper/>}/>


      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
