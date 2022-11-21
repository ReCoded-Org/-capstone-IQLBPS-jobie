import Contact from "../../components/Contact/Contact";
import NameAndLinks from "../../components/NameAndLinks/NameAndLinks";
import UserProfile from "../../components/UserProfile/UserProfile";
import { users } from "../../data/usersData";

function ProfilePage() {
  return (
    <div className="flex flex-col align-items-center bg-gray-500/5">
      <NameAndLinks />
      <UserProfile users={users} />
      <Contact />
    </div>
  );
}

export default ProfilePage;
