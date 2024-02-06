import React from "react";
import { useNavigate } from "react-router-dom";
import TableHeader from "../../../components/Table/TableHeader";
import Table from "../../../components/Table/Table";

const CategoryList = ({rows ,columns}) => {
  const navigate = useNavigate();
  return (
    <div className="px-4 h-[calc(100vh-55px)] pt-3">
      {/* Page Header */}
      <div className="flex justify-between items-center h-[55px]">
        <span className="text-xl font-semibold text-black">Course Categories</span>
        <button
          onClick={() => navigate("add")}
          className="bg-primary-main text-[#333]  rounded py-1 px-3"
        >
          {" "}
          + Add Category{" "}
        </button>
      </div>
      <div className="border flex flex-col h-[calc(100%-55px)] rounded-xl p-4 bg-white">
        {/* <TableHeader page={1} rowCount={1} rowsPerPage={4} rows={rows} /> */}

        <div className="grow overflow-auto">
          <Table rows={rows} columns={columns} isCheckbox={true} />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
