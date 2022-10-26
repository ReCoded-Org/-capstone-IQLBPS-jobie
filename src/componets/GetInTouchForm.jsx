import React from 'react'

export default function ()   {  return (
    <div>    <div className="flex  justify-around max-w-full mt-[60px] ">
                <div className="div-1 max-w-[50%]"><h2 className='text-2xl subpixel-antialiased'>Get in touch</h2></div>
                <div className="div-2 max-w-[50%]"> <h2 className='text-2xl'>Contact Us</h2></div>
    </div>
        <div className='flex justify-around'>
            <div className='flex flex-col'>
            <div className='flex justify-around gap-3' >
                <label htmlFor="Firstname" className='text-left text-xl font-semibold'> first name <br/><input type="text" className='border-2 border-solid p-1.5' /></label>
                
             <label htmlFor="Lastname"className='text-left text-xl font-semibold'> first name <br/> <input type="text" className='border-2 border-solid p-1.5'/></label>
                </div>
                <div className=" flex-col text-left">
             <label htmlFor="Lastname"className='text-left text-xl font-semibold'> Email <br/> <input type="text" className='border-2 border-solid p-1.5'/></label>  
 <br/> <label htmlFor="Lastname"className='text-left text-xl font-semibold'> first name <br/> <textarea name="" className='border-2 border-solid' id="" cols="30" rows="3"> </textarea></label>  
    </div>
           </div>
        <div className='flex justify-center'><ul><li>one</li>
        <li>two</li>
        <li>there</li>
                <li>Four</li></ul></div></div>
         
    </div>
  )} 

 
