/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

function BasicInfoEdit() {
  return (
    <div className="bg-gray-50 pt-1 pb-0">
      <h1 className="text-2xl text-left ml-48 mt-24 small:ml-16 medium:ml-24">
        Basic Info
      </h1>

      <form action="#" method="POST">
        <div className=" flex justify-center	pb-20 	 overflow-hidden  sm:rounded-md">
          <div className="w-3/4		 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-9 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  placeholder="First name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  placeholder="Last name"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="Title"
                  id="Title"
                  autoComplete="given-name"
                  className="h-9 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-9 ">
                <label
                  htmlFor="Biography"
                  className="block text-left text-sm font-medium text-gray-700"
                >
                  Biography
                </label>
                <textarea
                  type="text"
                  name="Biography"
                  id="Biography"
                  className=" h-24 w-full mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BasicInfoEdit;
