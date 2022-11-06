import React, { useState } from "react";

const Experience = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  function handleShowForm() {
    setIsShowForm(true);
  }
  function handleRemoveShowForm() {
    setIsShowForm(false);
  }

  return (
    <div className="bg-gray-200">
      <div className="pt-4 pb-10">
        <h1 className="pb-5">Work Experience</h1>
        <button
          type="button"
          onClick={handleShowForm}
          className="bg-[#154360] hover:bg-[#226086] text-white font-bold py-2 px-4 rounded-full  left-10 top-10 "
        >
          Add Item
        </button>
      </div>
      {isShowForm && (
        <div className="pt-4">
          <h1 className="pb-5">Experience Item</h1>
          <button
            type="button"
            onClick={handleRemoveShowForm}
            className="bg-transparent hover:bg-[#154360] text-[#154360] font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
          >
            Remove
          </button>
          <div className="bg-gray-200 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 px-8">
              <div className="flex flex-col text-black-400 py-2">
                <lable> Company </lable>
                <input
                  type="text"
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>

              <div className="flex flex-col text-black-400 py-2">
                <lable> Location</lable>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-black-400 py-2">
                <lable>Type of Emploment</lable>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-black-400 py-2">
                <lable className=""> Postion</lable>
                <input
                  type="text"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-black-400 py-2">
                <lable>Date</lable>
                <input
                  type="date"
                  required
                  className="rounded-lg bg-white mt-2 p-2 focus:border-blue-500  focus:outline-none"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
