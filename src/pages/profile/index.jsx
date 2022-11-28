import Nameandlinksdesign from "../../components/NameAndLinks/Nameandlinksdesign";
import UserProfile from "../../components/UserProfile/UserProfile";
import UserContact from "../../components/userContact/UserContact";
import { users } from "../../data/usersData";
import BookmarkedJobs from "../../components/BookmarkedJobs/BookmarkedJobs";

function ProfilePage() {
  return (
    <div className="flex flex-col align-items-center bg-gray-500/5">
      <Nameandlinksdesign />
      <UserProfile users={users} />
      <BookmarkedJobs />
      <UserContact />
    </div>
  );
}

export default ProfilePage;
