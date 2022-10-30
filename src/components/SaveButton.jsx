function SaveButton(){
  return(
    <div className="flex justify-end p-10 font-inter small:flex-col small:space-y-1 small:items-end  ">
      <button type="button" className=" py-2 font-bold bg-accent px-5 rounded-3xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 small:w-24 small:m-0  small:text-xs">Save</button>
      <button type="button" className="ml-4 py-2 font-bold bg-blue-200 px-5 rounded-3xl text-dark-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 small:w-24 small:m-0 small:text-xs">Cancel</button>
    </div>
  )
}
export default SaveButton;