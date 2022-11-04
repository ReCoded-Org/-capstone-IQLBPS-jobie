import React from 'react'

function JobsFinder() {
  return (
    <div className="   bg-gray-200  flex-col justify-around  items-center py-16 ">
      <div>
        <div>
          <h1 className="text-3xl font-medium text-dark-gray leading-loose ">
            {' '}
            Jobs Finder
          </h1>
          <p className="decoration-solid pt-0 text-dark-gray leading-loose">
            {' '}
            Find the best jobe for you here
          </p>
        </div>
        <div className=" flex-col mt-2">
          <input
            type="search"
            placeholder="Type to search "
            className="rounded-3xl px-6 py-2 outline-none relative left-8"
          />
          <button
            type="button"
            className="py-2 bg-accent px-5 rounded-3xl text-white relative   hover:bg-red-500 "
          >
            {' '}
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobsFinder