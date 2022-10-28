import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileLines,faHandshake,faPen} from '@fortawesome/free-solid-svg-icons'

function HowItWorks(){
  return(
    <div className="md:container md:mx-auto pl-9 ">
      <div>
      <h1 className="text-left text-5xl font-inter text-secondary py-10">How it Works</h1>
      </div>
      <div className="text-left flex justify-between flex-nowrap content-center text- font-inter ">
        <div className='w-1/2'>
          <FontAwesomeIcon icon={faFileLines} className="rounded-full bg-indigo-500 text-4xl"/>
          <h1 className='text-3xl'>Create ur resume </h1>
          <p>Create your resume and add your skills and experience to your profile.You can also add your education and work experience to your profile.</p>
        </div>
        <div className='w-1/2'>
        <FontAwesomeIcon icon={faPen} className="rounded-full bg-indigo-500 text-4xl"/>
          <h1 className='text-3xl'>Apply for jobs</h1>
          <p className=''>Search for jobs and apply for them.You can also search for companires and apply for their jobs.</p>
        </div>
        <div className='w-1/2'>
          <FontAwesomeIcon icon={faHandshake} className="rounded-full bg-indigo-500 text-4xl"/>
          <h1 className='text-3xl'>Get Hired</h1>
          <p>Once you have applied for a job you will be notified when the employer has responded to your application.</p>
        </div>
      </div>

    </div>
  )
}
export default HowItWorks;