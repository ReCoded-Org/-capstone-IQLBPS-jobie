import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const NameAndLinksdesign = () => {
  return (
    <div className="max-w-5xl mt-16 mb-24 px-4 flex flex-col gap-4 flex-wrap mx-auto">
      <div className="flex gap-4 items-start">
        <div className="text-8xl font-bold pt-4 px-8 pb-6 cursor-pointer bg-blue-100 rounded-xl text-slate-900">
          A
        </div>
        <div className="flex flex-col items-start gap-4 pt-2">
          <h4 className="text-4xl font-bold text-slate-900">Allan Saleh</h4>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="bg-dark-gray hover:bg-[#226086] text-white font-bold py-1 px-10 rounded-full"
            >
              Hire
            </button>
            <button
              type="button"
              className="bg-transparent hover:bg-dark-gray text-[#154360] font-semibold hover:text-white py-1 px-10 border border-dark-gray hover:border-transparent rounded-full"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        <a
          href="https://linkedin.com"
          className="flex items-center gap-1 cursor-pointer py-1 px-2 rounded-md hover:bg-gray-200"
        >
          <AiFillLinkedin className="text-2xl text-[#0072b1]" />
          Linkedin
        </a>
        <a
          href="https://github.com"
          className="flex items-center gap-1 cursor-pointer py-1 px-2 rounded-md hover:bg-gray-200"
        >
          <AiFillGithub className="text-2xl text-black" />
          GitHub
        </a>
        <a
          href="https://facebook.com"
          className="flex items-center gap-1 py-1 px-2 rounded-md hover:bg-gray-200"
        >
          <AiFillFacebook className="text-2xl text-[#3b5998]" />
          Facebook
        </a>
      </div>
    </div>
  );
};

export default NameAndLinksdesign;