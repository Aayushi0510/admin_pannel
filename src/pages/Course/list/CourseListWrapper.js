import React, { useEffect } from 'react'
import CourseList from './CourseList'
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout'
import {  FaTrashAlt} from 'react-icons/fa';
import { FaPencil } from "react-icons/fa6";
import { useDeleteCourseMutation, useGetCourseQuery } from '../../../redux/slices/services/courseServices';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTableLoading } from '../../../redux/slices/AuthSlice';
import { setCourseData } from '../../../redux/slices/CourseSlice';
import { useNavigate } from 'react-router-dom';
import ShowDialogBox from '../../../components/DialogBox/ShowDialogBox';


const CourseListWrapper = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
const {data ,isFetching ,isLoading}=useGetCourseQuery()
//  const { courseData }=useSelector((state)=>state.course)
const [deleteCourse] = useDeleteCourseMutation();

useEffect(()=>{
  if(!isLoading && !isFetching)
  {
    dispatch(setCourseData(data?.data))
  }
  else{
    dispatch(setIsTableLoading(true))
  }
},[dispatch ,data ,isFetching ,isLoading])
  const columns = [
    {
        field: 'Title',
        headerName: 'Title',
        flex: 'flex-[1_1_0%]',
        renderCell: (row) => (
            <span>
                {' '}
                {row.title} {' '}
            </span>
        ),
    },
    {
        field: 'Price',
        headerName: 'Price',
        flex: 'flex-[1.5_1.5_0%]',
        renderCell: (row) => {
            return <span> {row.price} </span>
        },
    },
    {
        field: 'rating',
        headerName: 'Rating',
        flex: 'flex-[1_1_0%]',
        renderCell: (row) => {
          return <span> {row.rating} </span>
      },
    },
    {
        field: 'actions',
        headerName: 'Actions',
        flex: 'flex-[0.5_0.5_0%]',
        renderCell: (row) => (
          <>
          <FaPencil onClick={() => handleEdit(row)} style={{ cursor: 'pointer', marginRight: '8px' }} />
          <FaTrashAlt onClick={() => handleDelete(row)} style={{ cursor: 'pointer', marginRight: '8px' }} />
          {/* <FaEye onClick={() => handleView(row)} style={{ cursor: 'pointer' }} /> */}
      </>

            //     // handleOnAction={() => {
            //     //     setShowDropdown(!showDropdown)
            //     //     //   setCurrentId(row?._id);
            //     // }}
            // >
            //     <></>
        ),
        align: 'end',
    },
]
const handleEdit = (row) => {
  navigate(`edit/${row._id}`);
};
const handleDelete = async (row) => {
  try {
    // Open the confirmation dialog
    const result = await ShowDialogBox({
      title: "Delete Item",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    // Proceed with deletion if the user clicked "Yes"
    if (result.isConfirmed) {
      console.log(row._id);
      const res = await deleteCourse(row._id);
      console.log(res);

      if (res.data) {
        // ShowDialogBox({
        //   title: "Deleted!",
        //   text: "The item has been deleted successfully.",
        //   icon: "success",
        // });
        
      }
    }
  } catch (error) {
    console.error("Error deleting client:", error);

    ShowDialogBox({
      title: "Error",
      text: "An error occurred while deleting the item.",
      icon: "error",
    });
  }
};

 
  return (
  <Sidenavlayout>
    <CourseList rows={data?.data} columns={columns}/>
</Sidenavlayout>  )
}

export default CourseListWrapper