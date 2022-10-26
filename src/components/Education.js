import React ,{ useState } from 'react'

const Education = () => {
  const [isShowForm ,setIsShowForm] =useState(false)
  function handleShowForm (){
    setIsShowForm(true )
  }
  function handleRemoveShowForm (){
    setIsShowForm(false)
  }
  return (
    <div  className='bg-blue-200 '>  
             <div className='relative h-32 w-32'>
             <h1>Education</h1>
          <button type="button" 
          onClick={handleShowForm}
           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  left-10 top-10 "
          
          >Add Item</button>
             </div>
  
           {isShowForm &&   
             <div>
                   <span>Education Item</span>
                   <button 
                   type="button" 
                   onClick={handleRemoveShowForm}
                   className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                   >Remove</button>
                 <div className='bg-blue-200'>
                 <form className='grid grid-cols-3 divide-x '>
          <div>
               <lable> University/school</lable>
               <input type="text"  required/>
          </div>
          <div>
               <lable> Major </lable>
               <input type="text"  required/>
          </div>
          <div>
               <lable> Date </lable>
               <input type="date" required/>
          </div>


        
            
          
        </form>
            
                 </div>
             </div>
           
           }
       
    </div>
  )
}

export default Education