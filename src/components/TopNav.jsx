import { useContext } from "react";
import ProfileContext from "../contexts/ProfileContext";

function TopNav() {
  const profileContextValues = useContext(ProfileContext);
  //console.log("values", profileContextValues);
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}>
      {profileContextValues.username}
    </div>
  );
}
export default TopNav;
