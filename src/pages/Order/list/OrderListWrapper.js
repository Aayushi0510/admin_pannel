import React, { useEffect } from 'react'
import Sidenavlayout from '../../../components/layout/sidenavLayout/Sidenavlayout'
import {  FaTrashAlt} from 'react-icons/fa';
import { FaPencil } from "react-icons/fa6";
import { useDeleteCourseMutation, useGetCourseQuery } from '../../../redux/slices/services/courseServices';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShowDialogBox from '../../../components/DialogBox/ShowDialogBox';
import { useDeleteOrderMutation, useGetOrderQuery } from '../../../redux/slices/services/orderService';
import { setIsTableLoading, setOrderData } from '../../../redux/slices/orderSlice';
import OrderList from './OrderList';


const OrderListWrapper = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
const {data ,isFetching ,isLoading}=useGetOrderQuery()
  const  orderData = useSelector((state)=>state.order.order)
 const [deleteOrder] = useDeleteOrderMutation();

 const courseDetailsArray = [];

console.log(data?.data)
 data?.data.forEach(course => {
  const courseId = course.courseId[0];
  const details = {
      id: course?._id,
      title: courseId?.title,
      description: courseId?.description,
      totalUsers: courseId?.totalUsers,
      rating: courseId?.rating,
      price: courseId?.price,
      paymentStatus: course?.paymentStatus,
      // Add more properties as needed
  };

  // Push the details into the array
  courseDetailsArray.push(details);
});
console.log(orderData ,"orderData")
useEffect(()=>{
  if(!isLoading && !isFetching)
  {
    dispatch(setOrderData(data?.data))
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
      field: 'Status',
      headerName: 'Status',
      flex: 'flex-[1.5_1.5_0%]',
      renderCell: (row) => {
          return <span> {row.paymentStatus} </span>
      },
  },
    {
        field: 'Users',
        headerName: 'Users',
        flex: 'flex-[1_1_0%]',
        renderCell: (row) => {
          return <span> {row.totalUsers} </span>
      },
    },
    {
        field: 'actions',
        headerName: 'Actions',
        flex: 'flex-[0.5_0.5_0%]',
        renderCell: (row) => (
//           <>
//           {/* <FaPencil onClick={() => handleEdit(row)} style={{ cursor: 'pointer', marginRight: '8px' }} /> */}
           <FaTrashAlt onClick={() => handleDelete(row)} style={{ cursor: 'pointer', marginRight: '8px' }} /> 
//           {/* <FaEye onClick={() => handleView(row)} style={{ cursor: 'pointer' }} /> */}
//       </>

//             //     // handleOnAction={() => {
//             //     //     setShowDropdown(!showDropdown)
//             //     //     //   setCurrentId(row?._id);
//             //     // }}
//             // >
//             //     <></>
        ),
        align: 'end',
    },
]
const handleEdit = (row) => {
  navigate(`edit/${row._id}`);
};

const handleDelete = async(row) => {
  console.log(row)
  try {
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
      console.log(row.id);
      const res = await deleteOrder(row.id);
      console.log(res);

      if (res.data) {
        // ShowDialogBox({
        //   title: "Deleted!",
        //   text: "The item has been deleted successfully.",
        //   icon: "success",
        // });
        console.log("hdsh")
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
    <OrderList rows={courseDetailsArray} columns={columns}/>
</Sidenavlayout>  )
}

export default OrderListWrapper