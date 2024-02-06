import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditCategoryListing = ({ onSubmit }) => {
  const [apiStatus, setApiStatus] = useState(false);
  const { selectedCategory } = useSelector((state) => state?.category);
  
  const [formData, setFormData] = useState({
    title: "",
  });

  useEffect(() => {
    setFormData({
      title: selectedCategory?.title || "",
    });
  }, [selectedCategory]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="">
      <div className="p-4 flex flex-col gap-2  ">
        {/* Page Heading */}
        <div className="pt-1 pb-2 pl-2">
          <span className="text-xl font-semibold text-black">
            Update Category
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grow max-h-full bg-white border bg-1 rounded-xl p-4 shadow  bg-form-bg bg-cover bg-no-repeat">
            <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
              {/* Form Heading */}
              <div className="text-xl font-medium"> Category Details</div>

              {/* BUTTON - Add Button */}
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
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Name"
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

export default EditCategoryListing;
