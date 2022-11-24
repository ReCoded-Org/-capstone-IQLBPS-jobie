import React from "react";

const NameAndLinks = () => {
  return (
    <div>
      <div className="flex flex-row pt-6  pl-44  small:pl-10 ">
        <div className="bg-black  pt-6 p-10  ">
          <img
            src="https://i.pinimg.com/236x/44/ab/21/44ab21be0821eed03d0943dd5662def8.jpg"
            className="w-20 bg-blue-100"
            alt=""
          />
        </div>
        <div className="flex flex-col pt-6  ">
          <button
            type="button"
            className="bg-transparent hover:bg-dark-gray w-40  ml-8 mb-4  text-[#154360] font-semibold hover:text-white py-2 px-4 border border-dark-gray hover:border-transparent rounded-full"
          >
            Upload Photo
          </button>
          <button
            type="button"
            className="bg-transparent hover:bg-dark-gray w-40  ml-8 mb-4  text-[#154360] font-semibold hover:text-white py-2 px-4 border border-dark-gray hover:border-transparent rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="pt-32  pb-32 pl-44 small:pl-10 ">
        <h1 className="mb-4 text-4xl text-dark-gray md:text-5xl lg:text-6x pb-7 text-left">
          Resume File
        </h1>

        <form>
          <div className="relative">
            <div className="flex absolute items-center ">
              <input
                className="p-6 pl-44 mr-5 md:mr-0 w-full small:pl-24 small:pr-8 medium:pl-44  medium:pr-24  rounded-lg border border-gray-300 placeholder:text-20"
                placeholder="No File Selected"
                required
              />
              <button
                type="button"
                className="text-white absolute left-8 rounded-full bg-dark-gray small:w-20 small:left-3 small:px-1 w-32 hover:bg-[#226086] font-bold  px-4 py-2 "
              >
                Choose
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameAndLinks;
