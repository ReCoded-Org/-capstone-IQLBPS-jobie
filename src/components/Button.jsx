/* eslint-disable */ 
/* eslint-disable no-console, no-control-regex*/ 
import React from 'react'

const Button = (props) => {
  return (
    <button
    type="button"
    className="flex bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-9 mx-4 rounded-full"
  >
    {props.children}
  </button>
  )
}

export default Button