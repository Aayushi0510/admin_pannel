import React, { useState } from "react";

const AddUserListing = ({onSubmit}) => {
    const [apiStatus ,setApiStatus]=useState(false)
  return (
    <div className="">
      <div className="p-4 flex flex-col gap-2  ">
       

        {/* Page Heading */}
        <div className="pt-1 pb-2 pl-2">
        <span className="text-xl font-semibold text-black">Add New User</span>
        </div>
        <form onSubmit={onSubmit}>

        <div className="grow max-h-full bg-white border bg-1 rounded-xl p-4 shadow  bg-form-bg bg-cover bg-no-repeat">
          <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
            {/* Form Heading */}
            <div className="text-xl font-medium"> User Details</div>

            {/* BUTTON - Add Button */}
            <div>
              <button
            type="submit"
            disabled={apiStatus}
                className={`bg-primary-main rounded py-1 px-5 text-[#333] border border-primary-main ${
                  apiStatus ? "opacity-50" : ""
                }`}
              >
                Add User
              </button>
            </div>
          </div>
          <div className="grow py-8 px-3 ">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
          <label htmlFor="event_name" className="ml-1 ">
           Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="User Name"
            className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
            required
          />
          </div>
          <div className="flex flex-col">
          <label htmlFor="event_name" className="ml-1 ">
          Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
            required
          />
          </div>
          <div className="flex flex-col">
          <label htmlFor="event_name" className="ml-1 ">
             Mobile Number
          </label>
          <input
            type="number"
            name="mobileNo"
            id="mobileNo"
            placeholder="Mobile Number"
            className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
            required
          />
          </div>
          <div className="flex flex-col">
          <label htmlFor="event_name" className="ml-1 ">
Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
            required
          />
          </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserListing;
