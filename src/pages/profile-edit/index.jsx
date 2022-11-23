import NameAndLinks from "../../components/NameAndLinks/NameAndLinks";
import BasicInfoEdit from "../../components/BasicInfoEdit/BasicInfoEdit";
import ContactSkills from"../../components/ProfileEdit/contact_skills_page";
import Education  from "../../components/EducationAndExperience/Education";
import Experience from "../../components/EducationAndExperience/Experience";

function ProfileEdit(){
    return(
        <div className="flex flex-col align-items-center bg-gray-500/5">
            <NameAndLinks />
            <BasicInfoEdit />
            <ContactSkills/>
            <Education />
            <Experience />
        </div>
    );
}
export default ProfileEdit;