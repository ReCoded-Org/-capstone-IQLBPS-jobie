import React from 'react';

const NameAndLinks = () => {
  return (
    <div className="">
      <div className="  flex flex-row pt-6  pl-44 ">
        <div className="bg-black  pt-6 p-10  " >
            <img  src='https://i.pinimg.com/236x/44/ab/21/44ab21be0821eed03d0943dd5662def8.jpg' className='w-20 bg-blue-100' alt=''/>
        </div>
      <div className=" flex flex-col   pt-6  ">
      <button
          type="button"
          className="bg-dark-gray hover:bg-[#226086]  ml-8  mb-4 w-40 text-white font-bold py-2 px-4 rounded-full  "
        >
          UPload Photo
        </button>
        <button
          type="button"
          className="bg-transparent hover:bg-dark-gray w-40  ml-8 mb-4  text-[#154360] font-semibold hover:text-white py-2 px-4 border border-dark-gray hover:border-transparent rounded-full"
        >
          Delete
        </button>
      </div>
      </div>
      <div className="pt-6 pl-44">
        <form>
        {/* <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label> */}
          <div className="relative">
            <div className="flex absolute  items-center ">
                
              <input
                className=" p-6 pl-60  pr-60  rounded-lg border border-gray-300 "
                placeholder="No File Selected"
                required
              />
              <button
                type="button"
                className="text-white absolute left-8 rounded-full bg-dark-gray  w-32 hover:bg-[#226086] font-bold  px-4 py-2 "
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
