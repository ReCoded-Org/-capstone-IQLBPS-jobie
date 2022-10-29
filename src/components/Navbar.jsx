import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGlobe, faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
        <nav className="flex justify-center space-x-4 float-center ">

        <div className='flex justify-evenly items-center  md:flex'>
            <div>
            <img src='/logo.svg' alt='logo' className='h-8 md:flex md:h-12'/>
            </div>
            <div  className="hidden md:flex">
      <a href="/dashboard" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
      <a href="/team" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
      <a href="/projects" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Roadmap</a>
      <a href="/reports" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Jobs</a>
      <a href="/reports" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
      <a href="/reports" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">  <FontAwesomeIcon icon= {faGlobe }/>
</a>

      <div className='w-40 flex items-center md: flex'>
      <input
      
                    type="text"
                    className=" block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full"
                    placeholder="Search..."/>
                    <button type="button" className='-ml-6'>
                     <FontAwesomeIcon icon= {faMagnifyingGlass }/>
                    </button>
                    
                    </div>

                  <button type="button" className="flex bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button>


    </div>

    {/* mobile button goes here */}
 <div  className='md:hidden flex items-center'>
        <button type='button' className='mobile-menu-button'>
    <FontAwesomeIcon icon= {faBars}/>
    </button>
    </div>
    
    </div>
    {/* mobile menu goes here */}
    <div className='mobile-menu hidden md:hidden'>
        
mobile menu
{/* <a href='/dashboard' className='block py-2 px-4 text-sm hover:bg-gray-200'>Home</a>
<a href='/team' className='block py-2 px-4 text-sm hover:bg-gray-200'>About</a>
<a href='/projects' className='block py-2 px-4 text-sm hover:bg-gray-200'>Roadmap</a>
<a href='/reports' className='block py-2 px-4 text-sm hover:bg-gray-200'>Jobs</a>
<a href='/reports' className='block py-2 px-4 text-sm hover:bg-gray-200'>Contact</a>
<a href='/reports' className='block py-2 px-4 text-sm hover:bg-gray-200'>Home</a> */}

 </div>

 
    </nav>



    )
}

export default Navbar