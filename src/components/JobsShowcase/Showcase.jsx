import React from 'react';

function Showcase(props) {
  const { header, body, button } = props;
  return (
    <div className="w-96 small:w-80 px-11 py-9 mb-20 flex flex-col justify-between content-start  shadow-[2px_7px_7px_5px_rgba(83,83,83,0.3)] rounded-lg bg-light-gray text-gray-800 text-left leading-8  ">
      <div>
        <h1 className="mb-5 font-semibold text-3xl small:text-lg medium:text-2xl large:text-3xl ">
          {header}
        </h1>
        <p className="small:text-sm">{body}</p>
        <button
          className="mt-5 font-semibold text-lg small:text-base"
          type="button"
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Showcase;
