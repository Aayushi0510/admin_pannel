// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const Dashboard = () => {
//     const navigate=useNavigate()
//     const {user}=useSelector((state)=>state.auth)
//     const loading = useSelector((state) => state.auth.loading);
//     console.log(loading)
//     console.log(user)

//     useEffect(() => {
//       if (!user ) {
//         // If user is not available, navigate to the login page.
//         navigate("/login");
//       }
//     }, [user, navigate]);

//     return (
//     <div className="p-4">
//         <span className="text-xl font-semibold text-slate-600">Dashboard</span>
//     </div>
//     )
// }

// export default Dashboard
import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useGetCourseQuery } from "../../redux/slices/services/courseServices";
import {
  setCourseData,
  setIsTableLoading,
} from "../../redux/slices/CourseSlice";
import {
  setUserData,
  setIsTableLoading as usersetIsTableLoading,
} from "../../redux/slices/AuthSlice";
import { useGetUsersQuery } from "../../redux/slices/services/authService";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumb/BreadCrumb";
import {
  setOrderData,
  setIsTableLoading as ordersetTableIsLoading,
} from "../../redux/slices/orderSlice";
import { useGetOrderQuery } from "../../redux/slices/services/orderService";
import {
  setCategoryData,
  setIsTableLoading as categorysetIsTableLoading,
} from "../../redux/slices/CategorySlice";
import { useGetCategoryQuery } from "../../redux/slices/services/categoryService";

const breadcrumbs = [
  {
    label: "Dashboard",
    path: "/",
    icon: <IoPersonCircleOutline />,
  },
  {
    label: "All Course",
    path: "/course",
    icon: <IoPersonCircleOutline />,
  },
];

const colorMapping = {
  Blue: "#37474F",
  Green: "linear-gradient(45deg, #000, #cdcaa9)",
  // Green: "linear-gradient(45deg, #000, #cdcaa9)",
  Green: "linear-gradient(45deg, #222222, #898989)",
  Teal: "linear-gradient(45deg, #48c9b0, #1abc9c)",
  Purple: "linear-gradient(45deg, #9b59b6, #8e44ad)",
  Gold: "#78909C",
  Yellow: "#FECC00",
  Gold:  "#78909C",
  Yellow: '#FECC00'
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const {
    data: dataCourse,
    isFetching: courseisFetching,
    isLoading: courseisLoading,
  } = useGetCourseQuery();
  const {
    data: orderdatas,
    isFetching: orderIsFetching,
    isLoading: orderisLoading,
  } = useGetOrderQuery();

  const { courseData } = useSelector((state) => state.course);
  const { userData } = useSelector((state) => state.auth);
  const { categoryData } = useSelector((state) => state.category);
  const { data, isFetching, isLoading } = useGetUsersQuery();
  const {
    data: categorydata,
    isFetching: categoryisFetching,
    isLoading: categoryisLoading,
  } = useGetCategoryQuery();

  const orderData = useSelector((state) => state.order.orderData);

  useEffect(() => {
    if (!courseisLoading && !courseisFetching) {
      dispatch(setCourseData(dataCourse?.data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, dataCourse, courseisFetching, courseisLoading]);

  useEffect(() => {
    if (!categoryisLoading && !categoryisFetching) {
      dispatch(setCategoryData(categorydata));
    } else {
      dispatch(categorysetIsTableLoading(true));
    }
  }, [dispatch, categorydata, categoryisFetching, categoryisLoading]);

  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setUserData(data));
    } else {
      dispatch(usersetIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);

  useEffect(() => {
    if (!orderIsFetching && !orderisLoading) {
      dispatch(setOrderData(orderdatas?.data));
    } else {
      dispatch(ordersetTableIsLoading(true));
    }
  }, [dispatch, orderdatas, orderIsFetching, orderisLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);


  const all = courseData?.length;
  const completBooking = userData?.length;
  const processingBooking = orderData?.length;
  const pendingBooking = categoryData?.length;
  const DashboardData = [
    {
      title: "Total Course",
      value: all,
      color: "Green",
    },
    {
      title: "Total Users",
      value: completBooking,
      color: "Green",
    },
    {
      title: "Total Category",
      value: pendingBooking,
      color: "Green",
    },
    {
      title: "Total Order",
      value: processingBooking,
      color: "Green",
    },
    {
      title: "Total ",
      value: all,
      color: "Green",
    },
    {
      title: "Total ",
      value: all,
      color: "Green",
    },
  ];

  return (
    <div className=" pt-5 flex flex-col px-4 h-full w-full  ">
      {/* <BreadCrumbs breadcrumbs={breadcrumbs} /> */}

      <div className="pt-10">
        <h1 className="border-l-4 border-primary-main px-3 py-2 text-slate-700 font-medium text-2xl">
          Dashboard
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 xs:grid-cols-6 gap-4 pt-10">
        {loading ? (
          <div className="col-span-12 text-center text-gray-500">Loading</div>
        ) : (
          // Render data once it's loaded
          DashboardData.map((data, i) => (
            <div
              className="lg:col-span-4 xs:col-span-3 p-4 rounded-md h-40 flex-col items-center justify-between text-center transition-transform transform hover:-translate-y-1"
              style={{
                background: colorMapping[data.color],
                transition:
                  "background 0.3s ease-in-out, transform 0.3s ease-in-out",
              }}
              key={i}
            >
              <div className="text-white font-bold text-[55px]">
                {data.value}
              </div>
              <div className="text-white font-bold py-2 text-lg">
                {data.title}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
