import React, { useState } from "react";

const AddCategoryList = ({ onSubmit }) => {
  const [apiStatus, setApiStatus] = useState(false);
  return (
    <div className="">
      <div className="p-4 flex flex-col gap-2  ">
        <div className=" text-black font-bold"></div>

        <div className="pt-1">
          <span className="text-xl pl-2 font-semibold text-black">
            Add New Category
          </span>
        </div>
        <form onSubmit={onSubmit}>
          <div className="grow mt-3 max-h-full bg-white border bg-1 rounded-xl shadow  bg-form-bg bg-cover bg-no-repeat p-4">
            <div className="grow py-6 px-3 ">
              <div className=" gap-4">
                <div className="flex flex-col">
                  <label htmlFor="" className="ml-1 font-medium pb-2 ">
                    Category
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                    required
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={apiStatus}
                    className={`bg-primary-main rounded py-1 px-5 text-[#333] border border-primary-main ${
                      apiStatus ? "opacity-50" : ""
                    }`}
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryList;
