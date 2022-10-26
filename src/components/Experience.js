import React ,{ useState } from 'react'

const Experience = () => {
  const [isShowForm,setIsShowForm] = useState(false)
     

   function handleShowForm(){
     setIsShowForm(true)
   }
    function handleRemoveShowForm(){
      setIsShowForm(false)
    }
  
  return (
    <div className='bg-blue-100 '>  
                <div  className='relative h-32 w-32'>
                <h1 className='  pt-5 pl-5'>Work Experience</h1>
                 <button 
                       type="button" 
                       onClick={handleShowForm}
                       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full left-10 top-10  mt-5 ml-5"
          
                      >Add Item</button>
                </div>
           {isShowForm &&   
             <div>
                   <span>Experience Item</span>
                   <button 
                   type="button"
                    onClick={handleRemoveShowForm}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full"
                    >Remove</button>
                 <div className='bg-blue-100 grid grid-cols-3 divide-x'>
            <form  className='grid grid-cols-3 divide-x-[3px]' >
          <div>
               <lable> Company </lable>
               <input type="text"/>
          </div>


          <div>
               <lable> Location</lable>
                <input type="text" required/>

          </div>
          <div> 
              <lable>Type of Emploment</lable>
              <input type="text" required />

          </div>
          <div>
                <lable> Postion</lable>
                <input type="text" required />
          </div>
          <div> 
              <lable>Date</lable>
              <input type="date" required />
        </div>
            
          
        </form>
        </div>
             </div>
           
           }
       
    </div>
  )
}

export default Experience

























