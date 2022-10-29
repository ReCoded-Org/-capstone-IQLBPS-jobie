import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileLines,faHandshake,faPen} from '@fortawesome/free-solid-svg-icons'

function HowItWorks(){
  return(
    <div className="container  pl-9 ">
      <div>
      <h1 className="text-left text-5xl font-inter text-secondary py-10 font-bold">How it Works</h1>
      </div>
      <div className="text-left flex justify-center flex-nowrap content-center text- font-inter gap-24 small:flex-col small:items-center medium:flex-col pb-10">
        <div className=' '>
          <div className='rounded-full bg-dark-gray h-16 w-16 flex items-center justify-center '>
              <FontAwesomeIcon icon={faFileLines} className="text-3xl text-accent"/>
          </div>
          <h1 className='text-3xl py-3 small:text-left'>Create your resume </h1>
          <p className='text-justify small:text-justify small:text-xl'>Create your resume and add your skills and experience to your profile.You can also add your education and work experience to your profile.</p>
        </div>
        <div className=' '>
          <div className='rounded-full bg-dark-gray h-16 w-16 flex items-center justify-center'>
              <FontAwesomeIcon icon={faPen} className="text-3xl text-accent"/>
          </div>
          <h1 className='text-3xl py-3 small:text-left'>Apply for jobs</h1>
          <p className='text-justify small:text-justify small:text-xl'>Search for jobs and apply for them.You can also search for companires and apply for their jobs.</p>
        </div>
        <div className=' '>
          <div className='rounded-full bg-secondary h-16 w-16 flex items-center justify-center'>
            <FontAwesomeIcon icon={faHandshake} className="text-3xl text-accent"/>
          </div>
          <h1 className='text-3xl py-3'>Get Hired</h1>
          <p className='text-justify small:text-justify small:text-xl'>Once you have applied for a job you will be notified when the employer has responded to your application.</p>
        </div>
      </div>

    </div>
  )
}
export default HowItWorks;