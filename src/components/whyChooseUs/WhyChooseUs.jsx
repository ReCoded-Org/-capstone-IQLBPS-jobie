import React from "react";

function WhyChooseUs() {
  return (
    <div className="pt-10 bg-gray-500/5 ">
      <h1 className="text-5xl text-center font-inter font-semibold text-dark-gray small:text-xl medium:text-3xl">
        Why Choose <span className="text-accent">Us?</span>
      </h1>
      <div className="flex px-40 justify-around py-12 small:grid small:grid-rows-2 small:grid-flow-col small:gap-4 small:py-6 medium:grid medium:grid-rows-2 medium:grid-flow-col medium:gap-6 medium:py-7 large:gap-6">
        <div className="flex justify-between font-inter shadow-xl px-8  py-3 w-60 h-20 rounded-2xl border-2 border-white bg-white hover:scale-105 cursor-pointer small:w-44 small:h-16 small:px-4 small:py-2">
          <div className="bg-[#d4e6f1] rounded-full w-14 h-14 small:w-11 small:h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 m-3 small:w-6 small:h-6 small:m-2"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
          </div>
          <div className="text-left small:pl-4 large:pl-5 ">
            <p className="text-gray-600 text-sm small:text-xs">15k Vacancies</p>
            <h4 className="font-semibold text-dark-gray small:text-sm ">
              Posted
            </h4>
          </div>
        </div>
        <div className="flex justify-between font-inter shadow-xl px-8 py-3 w-60 h-20 rounded-2xl border-2 border-white bg-white hover:scale-105 cursor-pointer small:w-44 small:h-16 small:px-4 small:py-2">
          <div className="bg-[#d4e6f1] rounded-full w-14 h-14 small:w-11 small:h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 m-3 small:w-6 small:h-6 small:m-2"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-left small:pl-4 large:pl-5">
            <p className="text-gray-600 text-sm small:text-xs">5k Vacancies</p>
            <h4 className="font-semibold text-dark-gray">Saved</h4>
          </div>
        </div>
        <div className="flex justify-between font-inter shadow-xl px-8 py-3 w-60 h-20 rounded-2xl border-2 border-white bg-white hover:scale-105 cursor-pointer small:w-44 small:h-16 small:px-4 small:py-2">
          <div className="bg-[#d4e6f1] rounded-full w-14 h-14 small:w-11 small:h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 m-3 small:w-6 small:h-6 small:m-2"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.905 9.97a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V18a.75.75 0 001.5 0v-4.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
            </svg>
          </div>
          <div className="text-left small:pl-4 large:pl-5">
            <p className="text-gray-600 text-sm small:text-xs">12k CV</p>
            <h4 className="font-semibold text-dark-gray">Submitted</h4>
          </div>
        </div>
        <div className="flex justify-between font-inter shadow-xl px-8 py-3 w-60 h-20 rounded-2xl border-2 border-white bg-white hover:scale-105 cursor-pointer small:w-44 small:h-16 small:px-4 small:py-2">
          <div className="bg-[#d4e6f1] rounded-full w-14 h-14 small:w-11 small:h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 m-3 small:w-6 small:h-6 small:m-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <div className="text-left small:pl-4 large:pl-5">
            <p className="text-gray-600 text-sm small:text-xs">18k Employees</p>
            <h4 className="font-semibold text-dark-gray">Hired</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
