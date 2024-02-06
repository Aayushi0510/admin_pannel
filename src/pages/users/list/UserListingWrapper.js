import React, { useEffect } from "react";
import Sidenavlayout from "../../../components/layout/sidenavLayout/Sidenavlayout";
import UserLkisting from "./UserLkisting";
import {
  useDeleteUsersMutation,
  useGetUsersQuery,
} from "../../../redux/slices/services/authService";
import {
  setIsTableLoading,
  setUser,
  setUserData,
} from "../../../redux/slices/AuthSlice";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShowDialogBox from "../../../components/DialogBox/ShowDialogBox";

const UserListingWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isFetching, isLoading } = useGetUsersQuery();
  const [deleteUsers] = useDeleteUsersMutation();

  const { user } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.auth);
  console.log(userData);
  useEffect(() => {
    if (!isLoading && !isFetching) {
      dispatch(setUserData(data));
    } else {
      dispatch(setIsTableLoading(true));
    }
  }, [dispatch, data, isFetching, isLoading]);
  const columns = [
    {
      field: "Name",
      headerName: "Name",
      flex: "flex-[1_1_0%]",
      renderCell: (row) => <span> {row.name} </span>,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: "flex-[1.5_1.5_0%]",
      renderCell: (row) => {
        return <span> {row.email} </span>;
      },
    },
    {
      field: "mobile",
      headerName: "Mobile no.",
      flex: "flex-[1_1_0%]",
      renderCell: (row) => {
        return <span> {row.mobileNo} </span>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: "flex-[0.5_0.5_0%]",
      renderCell: (row) => (
        <>
          <FaPencil
            onClick={() => handleEdit(row)}
            style={{ cursor: "pointer", marginRight: "8px" }}
          />
          <FaTrashAlt
            onClick={() => handleDelete(row)}
            style={{ cursor: "pointer", marginRight: "8px" }}
          />
          {/* <FaEye onClick={() => handleView(row)} style={{ cursor: 'pointer' }} /> */}
        </>

        //     // handleOnAction={() => {
        //     //     setShowDropdown(!showDropdown)
        //     //     //   setCurrentId(row?._id);
        //     // }}
        // >
        //     <></>
      ),
      align: "end",
    },
  ];
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
        const res = await deleteUsers(row._id);
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
      <UserLkisting rows={userData} columns={columns} />
    </Sidenavlayout>
  );
};

export default UserListingWrapper;
