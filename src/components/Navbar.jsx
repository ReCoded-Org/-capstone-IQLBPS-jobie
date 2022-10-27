import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGlobe} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
        <div className='flex justify-evenly items-center'>
            <img src='/logo.svg' alt='logo'/>
        <nav className="flex justify-center space-x-4 float-center ">
      <a href="/dashboard" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
      <a href="/team" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
      <a href="/projects" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Roadmap</a>
      <a href="/reports" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Jobs</a>
      <a href="/reports" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
      <a href="/reports" className="font-small px-1 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">  <FontAwesomeIcon icon= {faGlobe }/>
</a>

      <div className='w-40 flex items-center '>
      <input
      
                    type="text"
                    className=" block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 w-full"
                    placeholder="Search..."/>
                    <button type="button" className='-ml-6'>
                    {/* <img src="/searchicon.svg" alt="search icon"/> */}
                    <FontAwesomeIcon icon= {faMagnifyingGlass }/>
                    </button>
                  </div> 
                  <button type="button" className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
       
    </nav>
    </div>
    



    )
}

export default Navbar