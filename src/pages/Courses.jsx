import { useParams } from "react-router-dom";

function UserProfile() {
  const { frontendID } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {frontendID}</p>
    </div>
  );
}

export default UserProfile;
