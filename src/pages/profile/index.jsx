import NameAndLinksdesign from "../../components/NameAndLinks/Nameandlinksdesign"
import UserProfile from "../../components/UserProfile/UserProfile";
import UserContact from "../../components/userContact/UserContact"

import { users } from "../../data/usersData";

function ProfilePage() {
  return (
    <div className="flex flex-col justify-start align-items-center bg-gray-500/5">
      <NameAndLinksdesign/>
      <UserProfile users={users} />
      <UserContact/>
    </div>
  );
}

export default ProfilePage;
