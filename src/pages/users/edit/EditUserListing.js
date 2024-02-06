import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditUserListing = ({ onSubmit }) => {
  const [apiStatus, setApiStatus] = useState(false);
  const { singleUserData } = useSelector((state) => state?.auth);
  console.log(singleUserData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNo: "",
  });

  useEffect(() => {
    // Update form data when singleClientData changes
    setFormData({
      name: singleUserData?.name || "",
      email: singleUserData?.email || "",
      password: singleUserData?.password || "",
      mobileNo: singleUserData?.mobileNo || "",
    });
  }, [singleUserData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData);
  };

  return (
    <div className="">
      <div className="p-4 flex flex-col gap-2  ">
        <div className="pt-1 pb-2 pl-2">
          <span className="text-xl font-semibold text-black">Update User</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grow max-h-full bg-white border bg-1 rounded-xl p-4 shadow  bg-form-bg bg-cover bg-no-repeat">
            <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
              <div className="text-xl font-medium"> User Details</div>
              <div>
                <button
                  type="submit"
                  disabled={apiStatus}
                  className={`bg-primary-main rounded py-1 px-5 text-[#333] border border-primary-main ${
                    apiStatus ? "opacity-50" : ""
                  }`}
                >
                  Update{" "}
                </button>
              </div>
            </div>
            <div className="grow py-8 px-3 ">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="event_name"
                    className="ml-1 font-medium pb-2 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="User Name"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 font-medium pb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    id="email"
                    placeholder="email"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 font-medium pb-2">
                    Mobile Number
                  </label>
                  <input
                    type="Number"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    id="mobileNo"
                    placeholder="Mobile Number"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="event_name" className="ml-1 font-medium pb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="email"
                    value={formData.password}
                    onChange={handleInputChange}
                    id="password"
                    placeholder="password"
                    className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
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

export default EditUserListing;
