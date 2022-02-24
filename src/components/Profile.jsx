import { useContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";

function Profile() {
  const [upadatedUsername, setUpdatedUsername] = useState("");
  const profileContextValues = useContext(ProfileContext);
  return (
    <div style={{ marginTop: 30 }}>
      <input
        type="text"
        placeholder="username"
        value={upadatedUsername}
        onChange={(e) => {
          setUpdatedUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          profileContextValues.setUsername(upadatedUsername);
        }}
      >
        Update UserName
      </button>
    </div>
  );
}
export default Profile;
