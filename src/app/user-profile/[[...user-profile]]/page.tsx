import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex justify-center items-center h-screen">
    <UserProfile path="/user-profile" />
  </div>
);

export default UserProfilePage;