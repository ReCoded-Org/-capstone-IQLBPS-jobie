import Contact from "../../components/contact/Contact"
import SaveButton from "../../components/UI/Button/SaveButton"

function ProfilePage({ userData }){
    return(
        <div className="flex flex-col align-items-center">
         <img 
         className="rounded-full scale-50"
         src={userData.src} 
         alt={userData.name}/>
         <h1 className="text-3xl"> {userData.name} </h1>
         <Contact/>
         <SaveButton/>
        </div>
    );
}

export default ProfilePage;